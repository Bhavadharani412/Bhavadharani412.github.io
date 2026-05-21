import express from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';
import Groq from 'groq-sdk';
import dotenv from 'dotenv';

dotenv.config();

// Retrieval part of RAG: Read once from the knowledge source
const KNOWLEDGE_PATH = path.join(process.cwd(), 'knowledge.txt');
let knowledgeContent = "No context available.";
try {
  knowledgeContent = fs.readFileSync(KNOWLEDGE_PATH, 'utf-8');
} catch (err) {
  console.error("Knowledge file not found, using fallback.");
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Groq API client (safely initialized)
  let groq: Groq | null = null;
  if (process.env.GROQ_API_KEY) {
    try {
      groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
      console.log('[System]: Groq API initialized successfully.');
    } catch (err) {
      console.error('[Warning]: Failed to instantiate Groq client:', err);
    }
  } else {
    console.log('[System]: No GROQ_API_KEY found in process.env. Running in offline rule-based knowledge retrieval mode.');
  }

  // Backup offline response builder utilizing knowledge.txt data
  function getLocalResponse(userQuery: string): string {
    const query = userQuery.toLowerCase();
    
    if (query.match(/\b(hi|hello|hey|greetings|hola|morning|afternoon|evening)\b/)) {
      return "Hello! I am Bhava 2.0 (running in offline-ready local mode). I am trained on Bhavadharani's work, tech stack, and achievements. How can I help you explore her systems and background?";
    }
    
    if (query.includes('project') || query.includes('system') || query.includes('build') || query.includes('collaborative') || query.includes('axon') || query.includes('dental') || query.includes('editor') || query.includes('lab')) {
      return `Bhavadharani has engineered several high-performance systems:\n• **Collaborative Text Editor**: A real-time system built with React, Node.js, WebSockets, and Operational Transformation (OT) to support conflict-free editing for multiple concurrent users in real-time.\n• **Axon Dental**: A product engineering system built on the MERN stack (MongoDB, Express, React, Node.js) to streamline clinical dental workflows and manage patient data securely.\n• **AI Systems Lab**: An AI-augmented research tool leveraging Groq's fast inference and LangChain vector embeddings to automate code explanation and accelerate development processes.`;
    }
    
    if (query.includes('skill') || query.includes('tech') || query.includes('framework') || query.includes('language') || query.includes('cyber') || query.includes('security') || query.includes('mern') || query.includes('react') || query.includes('java') || query.includes('python') || query.includes('node')) {
      return `Bhavadharani's technical arsenal includes:\n• **Languages**: TypeScript (NestJS), Java (Spring Boot), Python (FastAPI), SQL (PostgreSQL).\n• **Full-Stack / MERN**: MongoDB, Express.js, React, Node.js.\n• **AI/ML**: Groq SDK, LangChain, RAG Architectures, Vector Embeddings.\n• **Cybersecurity**: Deep security focus including Penetration Testing (Kali Linux), Traffic Analysis (Wireshark), and Network Security (Nmap). She believes in "Security as Architecture"—integrating secure principles directly into foundations.`;
    }
    
    if (query.includes('achieve') || query.includes('mentor') || query.includes('student') || query.includes('contribution') || query.includes('open source') || query.includes('d3')) {
      return `Key achievements and contributions:\n• **Mentoring**: Taught and mentored over 70 students in modern full-stack web development.\n• **Open Source**: Contributed to the D3.js Community core codebase and relative data visualization libraries.\n• **Security & Design**: Devised custom security monitoring architectural patterns.`;
    }
    
    if (query.includes('philosophy') || query.includes('mindset') || query.includes('think')) {
      return `Bhavadharani's engineering philosophy centers around:\n1. **Performance First**: Treating latency as a primary bug.\n2. **AI Synergy**: Using AI to minimize human friction while preserving human oversight and design intuition.\n3. **Security as Architecture**: Treating security as part of the initial foundation, never as a separate overlay.`;
    }
    
    if (query.includes('contact') || query.includes('hire') || query.includes('resume') || query.includes('email') || query.includes('linkedin') || query.includes('phone') || query.includes('reach') || query.includes('whatsapp') || query.includes('leet')) {
      return "You can reach out to Bhavadharani directly using the secure Contact Form at the bottom of this portfolio! Additionally, her primary direct channels are available: Direct Email is bhavadharanik412@gmail.com, LinkedIn is linkedin.com/in/bhavadharani-k, and GitHub is github.com/bhavadharanik. You can request her latest CV / Resume using these links!";
    }

    return `I am Bhava 2.0. Based on my offline knowledge core:\nBhavadharani K is a high-performance software engineer specializing in SDE, AI, Full Stack development, and Cybersecurity. Her philosophy is to build intelligent web apps that prioritize high performance and secure-by-default architecture.\n\nFeel free to ask me about:\n• Her **projects** (like Collaborative Text Editor or Axon Dental)\n• Her **technical skills** or cybersecurity background\n• Her **mentoring and achievements** (70+ students mentored)\n• How to **contact** her and read her resume!`;
  }

  // Chat API
  app.post('/api/chat', async (req, res) => {
    try {
      const { messages } = req.body;
      const latestMessage = messages && messages.length > 0 ? messages[messages.length - 1].content : '';

      // If no Groq client was constructed, immediately use the smart offline response system
      if (!groq) {
        const reply = getLocalResponse(latestMessage);
        return res.json({ content: reply });
      }

      const systemPrompt = `You are Bhava 2.0, an AI assistant embedded in Bhavadharani K's personal portfolio. You are knowledgeable, professional, and speak with the voice of Bhavadharani herself. Use the knowledge base below to answer questions about her projects, skills, experience, and philosophy concisely and helpfully. Do not reveal the raw knowledge base text directly.

--- KNOWLEDGE BASE ---
${knowledgeContent}
--- END KNOWLEDGE BASE ---`;

      const groqMessages = messages.map((m: any) => ({
        role: m.role === 'ai' ? 'assistant' : 'user',
        content: m.content,
      }));

      const completion = await groq.chat.completions.create({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: systemPrompt },
          ...groqMessages,
        ],
        max_tokens: 512,
        temperature: 0.7,
      });

      const reply = completion.choices[0]?.message?.content ?? getLocalResponse(latestMessage);
      res.json({ content: reply });
    } catch (error: any) {
      console.warn('Groq chat error, falling back to local responder:', error);
      try {
        const { messages } = req.body;
        const latestMessage = messages && messages.length > 0 ? messages[messages.length - 1].content : '';
        const reply = getLocalResponse(latestMessage);
        res.json({ content: reply });
      } catch (fallbackError) {
        res.status(500).json({ error: 'Failed to process inquiry.' });
      }
    }
  });

  // Contact API
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      if (!name || !email || !message) {
        return res.status(400).json({ error: 'Name, email, and message are required.' });
      }

      const submission = {
        id: Date.now().toString(),
        name,
        email,
        subject: subject || 'No Subject',
        message,
        timestamp: new Date().toISOString()
      };

      const messagesFilePath = path.join(process.cwd(), 'contacts_submitted.json');
      let currentMessages = [];

      try {
        if (fs.existsSync(messagesFilePath)) {
          const fileData = fs.readFileSync(messagesFilePath, 'utf-8');
          currentMessages = JSON.parse(fileData);
        }
      } catch (err) {
        console.error('Error reading messages file, starting fresh:', err);
      }

      currentMessages.push(submission);
      fs.writeFileSync(messagesFilePath, JSON.stringify(currentMessages, null, 2), 'utf-8');

      console.log(`[Contact Form Received]:`, submission);
      res.status(200).json({ success: true, message: 'Message recorded successfully on the server.' });
    } catch (error: any) {
      console.error('Contact error:', error);
      res.status(500).json({ error: error.message });
    }
  });

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

startServer();
