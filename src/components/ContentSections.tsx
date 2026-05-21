/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { BLOGS, SKILLS } from '../data';
import { 
  BookOpen, 
  ExternalLink, 
  Cpu, 
  Shield, 
  Code, 
  Database, 
  Layers, 
  Infinity, 
  Lightbulb, 
  Search, 
  GitBranch, 
  Github, 
  Terminal, 
  Cloud, 
  Lock, 
  Settings, 
  Users, 
  MessageSquare, 
  Zap, 
  Globe,
  HardDrive,
  UserCheck,
  ShieldAlert,
  Key,
  Server
} from 'lucide-react';

export function BlogSection() {
  return (
    <section id="writings" className="px-5 sm:px-8 lg:px-20 lg:pl-[120px] py-25 bg-[#F8F6F1]">
      <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-[#7A7A7A] mb-5">
        <div className="w-1.5 h-1.5 bg-[#4D5B47] rounded-full" />
        Tech Writings
      </div>
      <h2 className="font-['Playfair_Display'] text-[clamp(32px,4vw,48px)] font-bold leading-[1.1] tracking-tight text-[#121212] mb-15">
        Recent Writings.<br />Insights & Guides.
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOGS.map((blog) => (
          <motion.div 
            key={blog.id}
            whileHover={{ y: -8 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-video rounded-xl overflow-hidden mb-6 border border-[rgba(18,18,18,0.08)]">
              <img 
                src={blog.image} 
                alt={blog.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all" />
            </div>
            <div className="flex items-center gap-2.5 text-[11px] font-['JetBrains_Mono'] text-[#7A7A7A] mb-3">
              <span>{blog.date}</span>
              <span className="w-1 h-1 bg-[rgba(18,18,18,0.08)] rounded-full" />
              <span>{blog.readTime}</span>
            </div>
            <h3 className="font-['Playfair_Display'] text-[22px] font-bold text-[#121212] mb-3 leading-tight group-hover:text-[#4D5B47] transition-colors line-clamp-2">
              {blog.title}
            </h3>
            <p className="text-[14px] leading-relaxed text-[#525252] mb-4 line-clamp-2">
              {blog.summary}
            </p>
            <a 
              href={blog.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#121212] border-b border-[#121212] pb-0.5 group-hover:border-[#4D5B47] group-hover:text-[#4D5B47] transition-all"
            >
              Read my blog <ExternalLink className="w-3 h-3" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const getIcon = (skill: any) => {
  const name = skill.name.toLowerCase();
  const category = skill.category.toLowerCase();

  // Specific Skills
  if (name.includes('ai') || name.includes('prompt')) return <Cpu className="w-5 h-5" />;
  if (name.includes('cyber') || name.includes('security') || name.includes('principles') || name.includes('fundamentals')) return <Shield className="w-5 h-5" />;
  if (name.includes('cryptography') || name.includes('auth')) return <Key className="w-5 h-5" />;
  if (name.includes('risk')) return <ShieldAlert className="w-5 h-5" />;
  if (name.includes('mern') || name.includes('stack')) return <Layers className="w-5 h-5" />;
  if (name.includes('react') || name.includes('next')) return <Zap className="w-5 h-5" />;
  if (name.includes('node') || name.includes('express')) return <Server className="w-5 h-5" />;
  if (name.includes('sql') || name.includes('database') || name.includes('mongo') || name.includes('postgres')) return <Database className="w-5 h-5" />;
  if (name.includes('git') || name.includes('github')) return <Github className="w-5 h-5" />;
  if (name.includes('vscode') || name.includes('postman') || name.includes('terminal')) return <Terminal className="w-5 h-5" />;
  if (name.includes('cloud') || name.includes('docker') || name.includes('devops')) return <Cloud className="w-5 h-5" />;
  if (name.includes('agile')) return <Infinity className="w-5 h-5" />;
  
  // Soft Skills
  if (name.includes('leadership')) return <UserCheck className="w-5 h-5" />;
  if (name.includes('communication')) return <MessageSquare className="w-5 h-5" />;
  if (name.includes('decision')) return <Lightbulb className="w-5 h-5" />;
  if (name.includes('collaboration')) return <Users className="w-5 h-5" />;

  // Categories
  if (category.includes('language') || category.includes('code')) return <Code className="w-5 h-5" />;
  if (category.includes('data')) return <Database className="w-5 h-5" />;
  if (category.includes('web') || category.includes('framework')) return <Layers className="w-5 h-5" />;
  if (category.includes('tool') || category.includes('platform')) return <Settings className="w-5 h-5" />;
  if (category.includes('practice')) return <Infinity className="w-5 h-5" />;
  if (category.includes('soft')) return <Users className="w-5 h-5" />;
  
  return <Search className="w-5 h-5" />;
};

export function SkillsSection() {
  // Group skills by category
  const categories = SKILLS.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof SKILLS>);

  const categoryEntries = Object.entries(categories);

  return (
    <section id="skills" className="px-5 sm:px-8 lg:px-20 lg:pl-[120px] py-25 bg-[#ECE7DF]">
      <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-[#7A7A7A] mb-5">
        <div className="w-1.5 h-1.5 bg-[#4D5B47] rounded-full" />
        Technical Arsenal
      </div>
      <h2 className="font-['Playfair_Display'] text-[clamp(32px,4vw,48px)] font-bold leading-[1.1] tracking-tight text-[#121212] mb-15">
        Hard & Soft Skills.<br />Categorized Expertise.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categoryEntries.map(([category, skills], idx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-[#F8F6F1] border border-[rgba(18,18,18,0.08)] rounded-xl p-8 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-all group"
          >
            <div className="mb-6 flex items-center justify-between">
              <div className="p-3 bg-[#ECE7DF] rounded-xl text-[#4D5B47] group-hover:bg-[#4D5B47] group-hover:text-[#F8F6F1] transition-all">
                {getIcon({ name: category, category })}
              </div>
              <span className="text-[10px] font-['JetBrains_Mono'] text-[#7A7A7A] uppercase tracking-widest">
                {skills.length} Skills
              </span>
            </div>
            
            <h3 className="font-['Playfair_Display'] text-[18px] font-bold text-[#121212] mb-5 group-hover:text-[#4D5B47] transition-colors leading-tight">
              {category}
            </h3>

            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name} className="group/skill">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[13px] font-medium text-[#525252] group-hover/skill:text-[#121212] transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-[10px] text-[#7A7A7A] font-['JetBrains_Mono']">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full h-[2px] bg-[rgba(18,18,18,0.05)] rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-[#4D5B47]/30 group-hover/skill:bg-[#4D5B47]"
                    />
                  </div>
                  {skill.frameworks && (
                    <div className="mt-1.5 flex flex-wrap gap-1.5">
                      {skill.frameworks.map(f => (
                        <span key={f} className="text-[9px] text-[#7A7A7A]/70 group-hover/skill:text-[#7A7A7A] transition-colors">
                          {f}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
