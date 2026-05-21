/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export function BootScreen({ onComplete }: { onComplete: () => void, key?: string }) {
  const [lines, setLines] = useState<string[]>([]);
  const bootMessages = [
    'Initializing system...',
    'Connecting AI modules...',
    'Loading projects...',
    'Establishing secure connection...',
    'Systems ready. ●'
  ];

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < bootMessages.length) {
        setLines(prev => [...prev, bootMessages[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 800);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-[#2B2B2B] z-[10000] flex flex-col items-center justify-center gap-2"
    >
      <div className="flex flex-col gap-2">
        {lines.map((line, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-['JetBrains_Mono'] text-[14px] text-[#D6D3D1]"
          >
            <span className="text-[#86EFAC] mr-2">›</span>
            {line}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
