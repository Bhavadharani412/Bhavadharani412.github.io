# Bhavadharani K — Portfolio (Groq-Powered AI)

A high-performance developer portfolio with an integrated AI chatbot (Bhava 2.0) powered by **Groq SDK** for ultra-fast LLM inference.

## 🚀 Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Configure your Groq API key
Copy `.env.example` to `.env` and add your key:
```bash
cp  .env
```
Then edit `.env`:
```
GROQ_API_KEY="your_groq_api_key_here"
```
Get a free API key at [console.groq.com/keys](https://console.groq.com/keys).

### 3. Run in development
```bash
npm run dev
```
Visit `http://localhost:3000`

### 4. Build for production
```bash
npm run build
npm start
```

## 🤖 AI Chatbot — Bhava 2.0

The chatbot uses **Groq's `llama-3.3-70b-versatile`** model with a RAG (Retrieval-Augmented Generation) setup:
- The `knowledge.txt` file is loaded as context on startup
- Answers questions about Bhavadharani's projects, skills, and philosophy
- Falls back to a built-in rule-based system if no API key is configured

## 🔑 No API Key?

No problem — the chatbot automatically falls back to an offline, rule-based knowledge system. All other portfolio features work without any API key.
