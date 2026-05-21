/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { Navbar, SideNav, HeroSection, Footer } from './components/Common';
import { JourneySection, SystemsSection } from './components/MainSections';
import { BlogSection, SkillsSection } from './components/ContentSections';
import { AssistantSection, ContactSection } from './components/ChatAndStats';
import { BootScreen } from './components/BootScreen';

export default function App() {
  const [isBooting, setIsBooting] = useState(true);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-[#F8F6F1] min-h-screen text-[#121212] font-['DM_Sans'] cursor-none overflow-x-hidden">
      {/* Custom Cursor */}
      <div 
        className="fixed w-2.5 h-2.5 bg-[#4D5B47] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-[transform,width,height] duration-75"
        style={{ left: cursorPos.x, top: cursorPos.y }}
      />
      <div 
        className="fixed w-9 h-9 border-[1.5px] border-[#4D5B47] opacity-50 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-[transform,width,height,opacity] duration-200"
        style={{ left: cursorPos.x, top: cursorPos.y }}
      />

      <AnimatePresence>
        {isBooting && (
          <BootScreen key="boot" onComplete={() => setIsBooting(false)} />
        )}
      </AnimatePresence>

      <Navbar />
      <SideNav />
      
      <main>
        <HeroSection />
        <JourneySection />
        <SystemsSection />
        <BlogSection />
        <SkillsSection />
        <AssistantSection />
        <ContactSection />
      </main>

      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.08); border-radius: 2px; }

        @keyframes scrollDown {
          from { top: -100%; }
          to { top: 100%; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      `}} />
    </div>
  );
}
