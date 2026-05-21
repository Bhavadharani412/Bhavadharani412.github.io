/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { User, Cpu, Shield, Code, ChevronRight, Send, Terminal, Loader2, BarChart3, BookOpen, Globe } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { JOURNEY, PROJECTS, BLOGS, SKILLS } from '../data';
import { Message } from '../types';

// --- Navbar ---
export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Writings', href: '#writings' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[200] bg-[#F8F6F1]/85 backdrop-blur-2xl border-b border-[rgba(18,18,18,0.08)]">
      
      <div className="flex items-center justify-between px-5 lg:px-10 py-4">
        
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <img
            src="/bhava.png"
            alt="Bhava Logo"
            className="w-8 h-8 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all"
            referrerPolicy="no-referrer"
          />

          <span className="font-['Playfair_Display'] text-[18px] font-bold text-[#121212] tracking-wide">
            Bhava
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[13px] font-medium text-[#525252] hover:text-[#121212] transition-colors relative group"
            >
              {item.label}

              <span className="absolute bottom-[-3px] left-0 w-0 h-[1.5px] bg-[#4D5B47] group-hover:w-full transition-all duration-250" />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#bhava2-0"
          className="hidden md:flex bg-[#121212] text-[#F8F6F1] px-5 py-2.25 rounded-full text-[13px] font-medium hover:bg-[#4D5B47] hover:-translate-y-[1px] transition-all items-center gap-1.5"
        >
          Bhava 2.0 ✦
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5"
        >
          <span
            className={`w-5 h-[1.5px] bg-[#121212] transition-all ${
              mobileOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />

          <span
            className={`w-5 h-[1.5px] bg-[#121212] transition-all ${
              mobileOpen ? 'opacity-0' : ''
            }`}
          />

          <span
            className={`w-5 h-[1.5px] bg-[#121212] transition-all ${
              mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-[300px] border-t border-[rgba(18,18,18,0.08)]' : 'max-h-0'
        }`}
      >
        <div className="px-5 py-5 flex flex-col gap-5 bg-[#F8F6F1]">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="text-[14px] font-medium text-[#525252] hover:text-[#121212] transition-colors"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#bhava2-0"
            onClick={() => setMobileOpen(false)}
            className="mt-2 bg-[#121212] text-[#F8F6F1] px-5 py-3 rounded-full text-[13px] font-medium text-center"
          >
            Open Bhava 2.0 ✦
          </a>
        </div>
      </div>
    </nav>
  );
}
// --- SideNav ---
export function SideNav() {
  const sections = [
    { id: 'home', label: 'Home', num: '01' },
    { id: 'experience', label: 'Experience', num: '02' },
    { id: 'projects', label: 'Projects', num: '03' },
    { id: 'writings', label: 'Writings', num: '04' },
    { id: 'skills', label: 'Skills', num: '05' },
    { id: 'bhava2-0', label: 'Bhava 2.0', num: '06' },
    { id: 'contact', label: 'Contact', num: '07' },
  ];

  return (
    <div className="hidden lg:flex fixed left-7 top-1/2 -translate-y-1/2 flex-col gap-7 z-100">
      {sections.map((s) => (
        <a key={s.id} href={`#${s.id}`} className="flex items-center gap-2.5 group cursor-none">
          <div className="relative">
            <span className="absolute left-[-20px] top-[-2px] text-[9px] font-['JetBrains_Mono'] text-[#7A7A7A]">{s.num}</span>
            <div className="w-1.5 h-1.5 rounded-full border-[1.5px] border-[#7A7A7A] group-hover:bg-[#4D5B47] group-hover:border-[#4D5B47] group-hover:scale-140 transition-all" />
          </div>
          <span className="text-[11px] font-medium text-[#7A7A7A] uppercase tracking-wider opacity-0 -translate-x-[6px] group-hover:opacity-100 group-hover:translate-x-0 transition-all">
            {s.label}
          </span>
        </a>
      ))}
    </div>
  );
}

// --- Hero Section ---
export function HeroSection() {
  return (
    <section id="home" className="min-h-screen px-5 sm:px-8 lg:px-20 lg:pl-[120px] pt-[120px] pb-20 grid grid-cols-1 lg:grid-cols-2 gap-15 items-center relative">
      <motion.div 
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hero-left"
      >
        <p className="text-[13px] text-[#7A7A7A] tracking-[0.08em] mb-3">Hello, I'm</p>
        <h1 className="font-['Playfair_Display'] text-[clamp(42px,5vw,68px)] font-bold leading-[1.05] tracking-tight text-[#121212] mb-5">
          Bhavadharani K
        </h1>
        <div className="w-10 h-0.5 bg-[#4D5B47] mb-6" />
        <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-normal leading-normal text-[#525252] mb-3">
          I build intelligent systems that merge<br />engineering, <span className="text-[#4D5B47] italic">AI</span>, and human experience.
        </p>
        <p className="text-[12px] font-semibold tracking-[0.1em] text-[#7A7A7A] mb-4 uppercase">
          SDE <span className="mx-1.5">•</span> AI <span className="mx-1.5">•</span> Full Stack <span className="mx-1.5">•</span> Security
        </p>
        <p className="text-[14px] sm:text-[15px] leading-relaxed text-[#525252] max-w-[420px] mb-9">
          I craft scalable products, optimize workflows, and turn complex problems into simple, impactful digital experiences.
        </p>
        <div className="flex gap-3 items-center flex-wrap">
          <a href="#projects" className="bg-[#121212] text-[#F8F6F1] px-6 py-3.25 rounded-sm text-[14px] font-medium hover:bg-[#4D5B47] hover:-translate-y-[1px] transition-all flex items-center gap-2 shadow-lg shadow-black/5">
            Explore My Projects →
          </a>
          <a href="https://github.com/Bhavadharani412" className="px-5 py-3.25 rounded-sm border border-[rgba(18,18,18,0.08)] text-[14px] font-medium text-[#525252] hover:border-[#121212] hover:text-[#121212] hover:-translate-y-[1px] transition-all flex items-center gap-2">
            <Globe className="w-4 h-4" />
            View GitHub
          </a>
          <a href="#bhava2-0" className="px-5 py-3.25 rounded-sm border border-[rgba(18,18,18,0.08)] text-[14px] font-medium text-[#525252] hover:border-[#121212] hover:text-[#121212] hover:-translate-y-[1px] transition-all flex items-center gap-2">
            Ask Bhava 2.0 ✦
          </a>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative"
      >
        <div className="absolute -right-5 -top-5 w-20 h-20 bg-[#E4DDD4] border border-[rgba(18,18,18,0.08)] rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]">
          <div className="text-[7px] font-['JetBrains_Mono'] tracking-[0.18em] uppercase text-[#7A7A7A] absolute text-center w-full animate-[spin-rev_20s_linear_infinite]">
            · ENGINEER · BUILDER · EXPLORER ·
          </div>
          <span className="text-[16px] z-1 pt-1">✦</span>
        </div>
        
        <div className="bg-[#ECE7DF] border border-[rgba(18,18,18,0.08)] rounded-xl p-5 shadow-sm">
          <p className="font-['JetBrains_Mono'] text-[10px] tracking-[0.12em] text-[#7A7A7A] uppercase mb-3.5">System Architecture</p>
          <div className="bg-[#2B2B2B] rounded-sm overflow-hidden mb-4">
            <div className="px-3.5 py-2.25 flex items-center gap-1.5 border-b border-white/5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
              <span className="font-['JetBrains_Mono'] text-[11px] text-[#888] ml-2">Bhava-systems: ~</span>
            </div>
            <div className="p-4 space-y-1.5 min-h-[140px]">
              <p className="font-['JetBrains_Mono'] text-[12px] text-[#D6D3D1]"><span className="text-[#86EFAC]">›</span> Initializing systems...</p>
              <p className="font-['JetBrains_Mono'] text-[12px] text-[#D6D3D1]"><span className="text-[#86EFAC]">›</span> Connecting AI modules...</p>
              <p className="font-['JetBrains_Mono'] text-[12px] text-[#D6D3D1]"><span className="text-[#86EFAC]">›</span> Loading projects...</p>
              <p className="font-['JetBrains_Mono'] text-[12px] text-[#D6D3D1] animate-[pulse_2s_infinite]"><span className="text-[#86EFAC]">›</span> Establishing secure connection...</p>
              <p className="font-['JetBrains_Mono'] text-[12px] text-[#D6D3D1]"><span className="text-[#86EFAC]">›</span> Systems ready. <span className="inline-block w-2 h-3.25 bg-[#86EFAC] animate-[blink_1s_infinite] align-middle ml-0.5" /></p>
            </div>
          </div>
          <div className="p-4 bg-white/40 rounded-sm border border-[rgba(18,18,18,0.08)]">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="bg-[#F8F6F1] border border-[rgba(18,18,18,0.08)] rounded px-3.5 py-1.75 text-[11px] font-medium text-[#525252]">Client</div>
              <ChevronRight className="w-3 h-3 text-[#7A7A7A]" />
              <div className="bg-[#F8F6F1] border border-[rgba(18,18,18,0.08)] rounded px-3.5 py-1.75 text-[11px] font-medium text-[#525252]">API Gateway</div>
              <ChevronRight className="w-3 h-3 text-[#7A7A7A]" />
              <div className="bg-[#F8F6F1] border border-[rgba(18,18,18,0.08)] rounded px-3.5 py-1.75 text-[11px] font-medium text-[#525252]">Services</div>
            </div>
            <div className="w-[1px] h-4 bg-[rgba(18,18,18,0.08)] mx-auto mb-2" />
            <div className="flex items-center justify-center gap-2">
              <div className="bg-[#F8F6F1] border border-[rgba(18,18,18,0.08)] rounded px-3.5 py-1.75 text-[11px] font-medium text-[#525252]">AI Engine</div>
              <div className="w-3 border-t border-[rgba(18,18,18,0.08)]" />
              <div className="bg-[#F8F6F1] border border-[rgba(18,18,18,0.08)] rounded px-3.5 py-1.75 text-[11px] font-medium text-[#525252]">Database</div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-10 left-[120px] flex items-center gap-2.5 text-[10px] tracking-[0.12em] uppercase text-[#7A7A7A] font-['JetBrains_Mono']">
        <div className="w-[1px] h-10 bg-[rgba(18,18,18,0.08)] relative overflow-hidden after:content-[''] after:absolute after:top-[-100%] after:left-0 after:w-full after:h-full after:bg-[#4D5B47] after:animate-[scrollDown_1.5s_ease_infinite]" />
        <span className="rotate-90">Scroll to explore</span>
      </div>
    </section>
  );
}

// --- Footer ---
export function Footer() {
  return (
    <footer className="px-5 sm:px-8 lg:px-20 lg:pl-[120px] py-15 bg-[#2B2B2B] flex items-center justify-between">
      <div className="flex items-center gap-2 group">
        <img src="/bhava.png" alt="Bhava Logo" className="w-8 h-8 rounded-full object-cover grayscale brightness-120 group-hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
        <div className="font-['Playfair_Display'] text-[24px] text-[#D6D3D1] font-bold">Bhava</div>
      </div>
      <div className="flex flex-col items-center lg:items-start gap-1">
  <span className="text-[12px] text-[#D6D3D1]/40 font-['JetBrains_Mono']">
    © {new Date().getFullYear()} Bhavadharani K · Bhava-systems:~
  </span>

  <span className="text-[11px] text-[#D6D3D1]/50">
    Made with ❤️ by Bhava
  </span>
</div>
      <div className="flex gap-6">
        <a href="https://github.com/Bhavadharani412" target="_blank" rel="noopener noreferrer" className="text-[13px] text-[#D6D3D1]/50 hover:text-[#D6D3D1] transition-colors cursor-none">GitHub</a>
        <a href="https://www.linkedin.com/in/bhavadharanik412/" target="_blank" rel="noopener noreferrer" className="text-[13px] text-[#D6D3D1]/50 hover:text-[#D6D3D1] transition-colors cursor-none">LinkedIn</a>
        <a href="#contact" className="text-[13px] text-[#D6D3D1]/50 hover:text-[#D6D3D1] transition-colors cursor-none">Contact</a>
      </div>
    </footer>
  );
}
