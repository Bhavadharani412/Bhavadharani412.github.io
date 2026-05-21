/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { JOURNEY, PROJECTS, BLOGS, SKILLS } from '../data';
import { BookOpen, Terminal, BarChart3, Database } from 'lucide-react';
import { useState, useEffect } from 'react';

// --- Journey Section ---
export function JourneySection() {
  const [activeIdx, setActiveIdx] = useState(JOURNEY.length - 1);

  return (
    <section id="experience" className="px-5 sm:px-8 lg:px-20 lg:pl-[120px] py-20 lg:py-25 bg-[#F8F6F1]">
      <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-[#7A7A7A] mb-5">
        <div className="w-1.5 h-1.5 bg-[#4D5B47] rounded-full" />
        My Journey
      </div>
      <h2 className="font-['Playfair_Display'] text-[clamp(32px,4vw,48px)] font-bold leading-[1.1] tracking-tight text-[#121212] mb-15">
        Curiosity.<br />Learning. Building.</h2>
      
      <div className="relative mb-5">
        <div className="absolute top-4.5 left-4 right-4 h-[1px] bg-[rgba(18,18,18,0.08)]">
          <motion.div 
            className="h-full bg-[#4D5B47]" 
            initial={{ width: 0 }}
            animate={{ width: `${(activeIdx / (JOURNEY.length - 1)) * 100}%` }}
            transition={{ duration: 1 }}
          />
        </div>
        <div className="flex gap-6 lg:gap-0 overflow-x-auto lg:overflow-visible relative z-1 pb-4">
          {JOURNEY.map((item, idx) => (
            <div 
              key={idx} 
              onClick={() => setActiveIdx(idx)}
              className={`flex flex-col items-center gap-3 text-center min-w-[120px] lg:flex-1 cursor-pointer group`}
            >
              <div className={`w-8 h-8 rounded-full border-[1.5px] border-[rgba(18,18,18,0.08)] flex items-center justify-center text-[14px] transition-all duration-300 ${activeIdx === idx ? 'bg-[#4D5B47] border-[#4D5B47] text-white scale-115' : 'bg-[#ECE7DF] group-hover:scale-115'}`}>
                {item.icon}
              </div>
              <span className="font-['JetBrains_Mono'] text-[12px] font-semibold text-[#121212]">{item.year}</span>
              <p className="text-[12px] text-[#7A7A7A] leading-normal max-w-[90px]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Systems Section ---
export function SystemsSection() {
  return (
    <section id="projects" className="px-5 sm:px-8 lg:px-20 lg:pl-[120px] py-25 bg-[#ECE7DF]">
      <div className="flex items-end justify-between mb-10">
        <div>
          <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-[#7A7A7A] mb-5">
            <div className="w-1.5 h-1.5 bg-[#4D5B47] rounded-full" />
            Featured Projects
          </div>

          <h2 className="font-['Playfair_Display'] text-[clamp(32px,4vw,48px)] font-bold leading-[1.1] tracking-tight text-[#121212]">
            Projects I've Engineered
          </h2>
        </div>

        <a
          href="https://github.com/Bhavadharani412?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[13px] font-medium text-[#525252] hover:text-[#121212] flex items-center gap-2 group transition-all"
        >
          <Terminal className="w-4 h-4" />

          View all projects

          <span className="group-hover:translate-x-1 transition-transform">
            →
          </span>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {PROJECTS.map((p) => (
          <a
            key={p.id}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F8F6F1] border border-[rgba(18,18,18,0.08)] rounded-xl p-7 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10 transition-all relative group overflow-hidden block"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#4D5B47]/5 opacity-0 group-hover:opacity-100 transition-opacity" />

            <p className="font-['JetBrains_Mono'] text-[11px] text-[#7A7A7A] mb-3.5">
              {p.number}
            </p>

            <h3 className="font-['Playfair_Display'] text-[20px] font-semibold text-[#121212] mb-2.5 leading-tight">
              {p.title}
            </h3>

            <span className="inline-flex bg-[#ECE7DF] border border-[rgba(18,18,18,0.08)] rounded-full px-3 py-1 text-[11px] font-medium text-[#525252] mb-4">
              {p.tag}
            </span>

            <div className="bg-[#ECE7DF] rounded-sm h-[110px] mb-5 overflow-hidden flex items-center justify-center border border-[rgba(18,18,18,0.08)]">

              {p.type === 'editor' && (
                <div className="w-full p-3 font-['JetBrains_Mono'] text-[9px] text-[#7A7A7A]">
                  <div className="mb-1 text-[#9CA3AF] font-bold">
                    // collaborative-editor.ts
                  </div>

                  <div className="mb-1 text-[#4D5B47]">
                    const room = sync(users)
                  </div>

                  <div className="text-[8px] text-[#6B7C65] mt-2">
                    ● user_1 ● user_2 ● live-sync
                  </div>
                </div>
              )}

              {p.type === 'ai' && (
                <div className="w-full p-3">
                  <div className="bg-[#E4DDD4] rounded-lg p-2 text-[9px] text-[#525252] mb-2">
                    Personalized Dashboard
                  </div>

                  <div className="space-y-1.5">
                    <div className="h-2 rounded bg-[#4D5B47]/20 w-[90%]" />
                    <div className="h-2 rounded bg-[#4D5B47]/30 w-[70%]" />
                    <div className="h-2 rounded bg-[#4D5B47]/20 w-[55%]" />
                  </div>
                </div>
              )}

              {p.type === 'terminal' && (
                <div className="w-full h-full bg-[#2B2B2B] p-3 font-['JetBrains_Mono'] text-[9px] text-[#86EFAC]">
                  <div>$ cargo run study-system</div>

                  <div className="mt-2 text-[#D6D3D1]">
                    Initializing deep work session...
                  </div>

                  <div className="mt-1 text-[#D6D3D1]">
                    Tracking execution blocks...
                  </div>

                  <div className="mt-1 animate-pulse">
                    Ready _
                  </div>
                </div>
              )}
            </div>

            <p className="text-[13px] leading-relaxed text-[#7A7A7A] mb-5">
              {p.desc}
            </p>

            <div className="flex items-center gap-1.5 text-[12px] font-medium text-[#7A7A7A] group-hover:text-[#4D5B47] transition-colors">
              <Terminal className="w-3.5 h-3.5" />

              View on GitHub
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}


