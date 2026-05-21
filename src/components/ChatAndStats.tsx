/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { motion, AnimatePresence } from 'motion/react';
import React, { useState, useRef, useEffect } from 'react';
import { Send, User, ChevronRight, Loader2, Mail, Github, Linkedin, MessageSquare, FileText, Terminal, ArrowUpRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { Message } from '../types';

export function AssistantSection() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'ai',
      content: "Hello! I'm Bhava 2.0, your AI companion. I can help you explore my projects, skills, experiences and the thinking behind the systems I build. How can I assist you today?",
      time: 'Just now'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (text: string = input) => {
    if (!text.trim() || isLoading) return;

    const userMsg: Message = {
      role: 'user',
      content: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMsg] })
      });

      const data = await response.json();
      
      const aiMsg: Message = {
        role: 'ai',
        content: data.content,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMsg: Message = {
        role: 'ai',
        content: "I'm having a connection issue. Please try again in a moment.",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const suggestions = [
    'Explain the collaborative editor architecture',
    'What problems interest you most?',
    'Why AI + Security?',
    'Walk me through your tech stack'
  ];

  return (
    <section id="bhava2-0" className="px-5 sm:px-8 lg:px-20 lg:pl-[120px] py-25 bg-[#F8F6F1] grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
      <div className="assistant-left">
        <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-[#7A7A7A] mb-5">
          <div className="w-1.5 h-1.5 bg-[#4D5B47] rounded-full" />
          Bhava 2.0
        </div>
        <h2 className="font-['Playfair_Display'] text-[clamp(32px,4vw,48px)] font-bold leading-[1.1] tracking-tight text-[#121212] mb-8">
          The next iteration
        </h2>
        <p className="text-[15px] leading-relaxed text-[#525252] mb-8">
          Your 24/7 engineering companion. I've been trained on my work, thoughts, and technical arsenal to provide deep insights into my process.
        </p>

        <div className="flex items-center gap-3.5 mb-7">
          <div className="w-14 h-14 rounded-full bg-[#ECE7DF] border-2 border-[rgba(18,18,18,0.08)] flex items-center justify-center relative overflow-hidden">
            <img src="/bhava.png" alt="AI Avatar" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            <div className="absolute bottom-0.5 right-0.5 w-2.5 h-2.5 bg-[#22C55E] rounded-full border-2 border-[#F8F6F1]" />
          </div>
          <div className="avatar-info">
            <h4 className="text-[15px] font-semibold text-[#121212]">Bhava 2.0</h4>
            <p className="text-[12px] text-[#7A7A7A]">Always online · Responds instantly</p>
          </div>
        </div>

        <div className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#7A7A7A] mb-3">Try asking me</div>
        <div className="flex flex-col gap-2">
          {suggestions.map((s) => (
            <button 
              key={s} 
              onClick={() => handleSend(s)}
              className="flex items-center justify-between bg-[#ECE7DF] border border-[rgba(18,18,18,0.08)] rounded-sm px-4 py-2.75 text-[13px] text-[#525252] hover:border-[#4D5B47] hover:text-[#121212] hover:bg-[#4D5B47]/5 transition-all w-full text-left cursor-pointer"
            >
              {s} <ChevronRight className="w-3.5 h-3.5 text-[#7A7A7A]" />
            </button>
          ))}
        </div>
      </div>

      <div className="bg-[#ECE7DF] border border-[rgba(18,18,18,0.08)] rounded-xl overflow-hidden flex flex-col h-[480px] shadow-sm">
        <div className="px-5 py-4 border-b border-[rgba(18,18,18,0.08)] bg-[#F8F6F1] flex items-center gap-2.5">
           <div className="w-9 h-9 rounded-full bg-[#ECE7DF] flex items-center justify-center relative overflow-hidden">
             <img src="/bhava.png" alt="AI Avatar" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
           </div>
           <div>
             <h4 className="text-[13px] font-semibold">Bhava 2.0</h4>
             <p className="text-[11px] text-[#7A7A7A] flex items-center gap-1">
               <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full" /> Online now
             </p>
           </div>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4 scroll-smooth custom-scrollbar bg-[#ECE7DF]">
          {messages.map((msg, i) => (
            <div key={i} className={`flex flex-col max-w-[85%] ${msg.role === 'user' ? 'self-end' : 'self-start'}`}>
              <div
  className={`px-4 py-3 rounded-xl text-[13px] leading-7 overflow-hidden ${
    msg.role === 'user'
      ? 'bg-[#121212] text-[#F8F6F1] rounded-br-none'
      : 'bg-[#F8F6F1] text-[#121212] border border-[rgba(18,18,18,0.08)] rounded-bl-none'
  }`}
>

  <div className="prose prose-sm max-w-none whitespace-pre-wrap break-words prose-p:my-2 prose-ul:my-2 prose-li:my-1 prose-strong:text-inherit">

    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        p: ({children}) => (
          <p className="mb-2 leading-7">{children}</p>
        ),

        ul: ({children}) => (
          <ul className="list-disc pl-5 space-y-1">
            {children}
          </ul>
        ),

        ol: ({children}) => (
          <ol className="list-decimal pl-5 space-y-1">
            {children}
          </ol>
        ),

        strong: ({children}) => (
          <strong className="font-semibold text-[#4D5B47]">
            {children}
          </strong>
        ),

        code: ({children}) => (
          <code className="bg-black/10 px-1 py-0.5 rounded text-[12px]">
            {children}
          </code>
        )
      }}
    >
      {msg.content}
    </ReactMarkdown>

  </div>
</div>
              <span className={`text-[10px] text-[#7A7A7A] mt-1 px-1 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                {msg.time}
              </span>
            </div>
          ))}
          {isLoading && (
            <div className="self-start px-4 py-3 bg-[#F8F6F1] border border-[rgba(18,18,18,0.08)] rounded-xl rounded-bl-none">
              <div className="flex gap-1">
                <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 1.2 }} className="w-1.5 h-1.5 bg-[#7A7A7A] rounded-full" />
                <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.2 }} className="w-1.5 h-1.5 bg-[#7A7A7A] rounded-full" />
                <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.4 }} className="w-1.5 h-1.5 bg-[#7A7A7A] rounded-full" />
              </div>
            </div>
          )}
        </div>

        <div className="p-4 bg-[#F8F6F1] border-t border-[rgba(18,18,18,0.08)] flex gap-2.5 items-center">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask anything about me..." 
            className="flex-1 bg-[#ECE7DF] border border-[rgba(18,18,18,0.08)] rounded-full px-4.5 py-2.5 text-[13px] outline-none focus:border-[#4D5B47] transition-all"
          />
          <button 
            onClick={() => handleSend()}
            disabled={isLoading || !input.trim()}
            className="w-9.5 h-9.5 bg-[#121212] rounded-full flex items-center justify-center text-white disabled:opacity-40 hover:bg-[#4D5B47] hover:scale-105 transition-all"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
       setError('Name, email, and message are required.');
       return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit message.');
      }

      setSuccess(true);
    } catch (err: any) {
      setError(err.message || 'Could not send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const links = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/bhavadharanik412/',
      icon: <Linkedin className="w-5 h-5" />,
      detail: 'Professional Network & Synergy',
      color: 'hover:text-[#0A66C2] hover:border-[#0A66C2]/20 hover:bg-[#0A66C2]/5'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/Bhavadharani412',
      icon: <Github className="w-5 h-5" />,
      detail: 'Code Repositories & Open Source',
      color: 'hover:text-[#181717] hover:border-[#181717]/20 hover:bg-[#181717]/3'
    },
    {
      name: 'LeetCode',
      href: 'https://leetcode.com/u/K_BHAVADHARANI/',
      icon: <Terminal className="w-5 h-5" />,
      detail: 'Competitive Programming Profile',
      color: 'hover:text-[#FFA116] hover:border-[#FFA116]/20 hover:bg-[#FFA116]/5'
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/918429641492',
      icon: <MessageSquare className="w-5 h-5" />,
      detail: 'Direct Chat & Instant Work Sync',
      color: 'hover:text-[#25D366] hover:border-[#25D366]/20 hover:bg-[#25D366]/5'
    },
    {
      name: 'Professional Resume',
      href: 'https://drive.google.com/file/d/11kdglQmoBKVYKLnwAUmD4X9tC3_2-gxZ/view?usp=sharing',
      icon: <FileText className="w-5 h-5" />,
      detail: 'Request/Download Latest CV',
      color: 'hover:text-[#4D5B47] hover:border-[#4D5B47]/20 hover:bg-[#4D5B47]/5'
    },
    {
      name: 'Direct Email',
      href: 'mailto:bhavadharanik412@gmail.com',
      icon: <Mail className="w-5 h-5" />,
      detail: 'bhavadharanik412@gmail.com',
      color: 'hover:text-[#EA4335] hover:border-[#EA4335]/20 hover:bg-[#EA4335]/5'
    }
  ];

  return (
    <section id="contact" className="px-5 sm:px-8 lg:px-20 lg:pl-[120px] py-25 bg-[#ECE7DF] border-t border-[rgba(18,18,18,0.06)]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
        
        {/* Left Side: Contact Form */}
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-[#7A7A7A] mb-5">
            <div className="w-1.5 h-1.5 bg-[#4D5B47] rounded-full" />
            Connect & Collaborate
          </div>
          <h2 className="font-['Playfair_Display'] text-[clamp(32px,4vw,48px)] font-bold leading-[1.1] tracking-tight text-[#121212] mb-6">
            Let's build<br />something beautiful.
          </h2>
          <p className="text-[15px] leading-relaxed text-[#525252] mb-10 max-w-lg">
            Have a project in mind, looking to hire, or just want to discuss engineering ideas? Use the secure form below to drop me a message.
          </p>

          <div className="bg-[#F8F6F1] border border-[rgba(18,18,18,0.08)] rounded-xl p-8 shadow-sm flex-1 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {success ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center text-center py-12 px-4 h-full my-auto justify-center"
                >
                  <div className="w-16 h-16 bg-[#4D5B47]/10 flex items-center justify-center rounded-full text-[#4D5B47] mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-['Playfair_Display'] text-[24px] font-bold text-[#121212] mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-[14px] text-[#525252] leading-relaxed max-w-md mb-8">
                    Thank you so much, <span className="font-semibold text-[#121212]">{formData.name}</span>. Your message has been received by my systems. I'll reach out to you at <span className="font-medium text-[#4D5B47]">{formData.email}</span> shortly.
                  </p>
                  <button 
                    onClick={() => {
                      setSuccess(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-6 py-2.75 text-[13px] font-medium bg-[#121212] text-white rounded-full hover:bg-[#4D5B47] hover:-translate-y-0.5 transition-all cursor-none"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  {error && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-start gap-3 text-red-700 text-[13px] leading-relaxed">
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                      <div>{error}</div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-semibold tracking-wider text-[#7A7A7A] uppercase">
                        Your Name *
                      </label>
                      <input 
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Jean Doe"
                        className="w-full bg-[#ECE7DF] border border-[rgba(18,18,18,0.08)] rounded-lg px-4 py-3 text-[13px] text-[#121212] outline-none focus:border-[#4D5B47] focus:bg-white transition-all cursor-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-semibold tracking-wider text-[#7A7A7A] uppercase">
                        Email Address *
                      </label>
                      <input 
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="jean@example.com"
                        className="w-full bg-[#ECE7DF] border border-[rgba(18,18,18,0.08)] rounded-lg px-4 py-3 text-[13px] text-[#121212] outline-none focus:border-[#4D5B47] focus:bg-white transition-all cursor-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-semibold tracking-wider text-[#7A7A7A] uppercase">
                      Subject
                    </label>
                    <input 
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                      placeholder="Opportunity to collaborate"
                      className="w-full bg-[#ECE7DF] border border-[rgba(18,18,18,0.08)] rounded-lg px-4 py-3 text-[13px] text-[#121212] outline-none focus:border-[#4D5B47] focus:bg-white transition-all cursor-none"
                    />
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label className="text-[11px] font-semibold tracking-wider text-[#7A7A7A] uppercase">
                      Your Message *
                    </label>
                    <textarea 
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="Please share details about your proposal or ideas..."
                      className="w-full bg-[#ECE7DF] border border-[rgba(18,18,18,0.08)] rounded-lg px-4 py-3 text-[13px] text-[#121212] outline-none focus:border-[#4D5B47] focus:bg-white transition-all resize-none cursor-none"
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#121212] text-white hover:bg-[#4D5B47] disabled:opacity-50 py-3.5 px-6 rounded-lg font-medium text-[13px] tracking-wide transition-all shadow-md hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-none"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Transmitting message...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Pulse Message
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Side: Contact Details & Directory Links */}
        <div className="flex flex-col h-full justify-between">
          <div className="mb-8">
            <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-[#7A7A7A] mb-5">
              <div className="w-1.5 h-1.5 bg-[#4D5B47] rounded-full" />
              Direct Channels
            </div>
            <h2 className="font-['Playfair_Display'] text-[clamp(32px,4vw,48px)] font-bold leading-[1.1] tracking-tight text-[#121212] mb-6">
              Connect with me.
            </h2>
            <p className="text-[15px] leading-relaxed text-[#525252] max-w-lg mb-4">
              Access my profiles directly across different technical platforms or send an email. Rapid responses are guaranteed through standard work synchronization.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
            {links.map((link, idx) => (
              <motion.a 
                key={link.name}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className={`bg-[#F8F6F1] border border-[rgba(18,18,18,0.08)] rounded-xl p-5.5 flex flex-col justify-between transition-all group scale-100 hover:scale-[1.02] hover:shadow-lg hover:shadow-black/[0.03] text-left cursor-none ${link.color}`}
              >
                <div className="flex items-start justify-between">
                  <div className="p-2.5 bg-[#ECE7DF] rounded-lg group-hover:bg-white transition-colors">
                    {link.icon}
                  </div>
                  <ArrowUpRight className="w-4.5 h-4.5 text-[#7A7A7A]/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                
                <div className="mt-6">
                  <h4 className="font-semibold text-[15px] text-[#121212] group-hover:text-inherit leading-none mb-1.5">
                    {link.name}
                  </h4>
                  <p className="text-[11.5px] text-[#7A7A7A] leading-relaxed group-hover:text-inherit/80">
                    {link.detail}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
