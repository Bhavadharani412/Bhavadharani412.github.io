/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Blog, Skill, JourneyItem } from './types';
export const PROJECTS = [
  {
    id: '1',
    number: '01',
    title: 'Collaborative Text Editor',
    tag: 'Real-time Systems',
    desc: 'Built a real-time collaborative text editor using React.js, Node.js, and Yjs with live synchronization, multi-user editing, and conflict-free collaboration workflows. Focused on scalability, synchronization architecture, and seamless collaborative user experience.',
    link: 'https://github.com/Bhavadharani412/collaborative-text-editor',
    type: 'editor'
  },
  {
    id: '2',
    number: '02',
    title: 'Hyper Personalized PWA',
    tag: 'AI Product Engineering',
    desc: 'Developed a hyper-personalized progressive web application focused on productivity, personalization, modern UI/UX, and AI-assisted workflows. Explored scalable frontend architecture, PWA capabilities, and personalized digital experiences.',
    link: 'https://github.com/Bhavadharani412/Bhavadharani-digi-world-pwa',
    type: 'ai'
  },
  {
    id: '3',
    number: '03',
    title: 'Study System 101',
    tag: 'Terminal Productivity System',
    desc: 'Built a Rust-powered terminal-based study and productivity operating system designed for deep work, execution tracking, and structured learning workflows. Focused on performance, developer productivity, CLI workflows, and systems-level thinking.',
    link: 'https://github.com/Bhavadharani412/study-system-101',
    type: 'terminal'
  }
];

export const BLOGS = [
  {
    id: 'b1',
    title: 'Building Study System 101 - A Rust Powered Terminal Productivity OS',
    date: '2025',
    readTime: '8 min read',
    summary: 'Explains the architecture, motivation, workflow design, and systems-thinking approach behind building a Rust-powered terminal productivity operating system for deep execution and structured study workflows.',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=1000',
    url: 'https://projects-explained.hashnode.dev/building-study-system-101-a-rust-powered-terminal-productivity-os-for-deep-evening-execution?utm_source=hashnode&utm_medium=feed'
  },
  {
    id: 'b2',
    title: 'Prime Number Checking - 5 Optimized Versions in Java',
    date: '2025',
    readTime: '6 min read',
    summary: 'Breaks down multiple approaches to prime number checking in Java while comparing optimization techniques, time complexity improvements, and practical problem-solving patterns for backend and DSA learning.',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=1000',
    url: 'https://linked-list-reverse.hashnode.dev/prime-number-checking-5-optimized-versions-in-java'
  },
  {
    id: 'b3',
    title: 'Won a Prize Using Denial of Service',
    date: '2025',
    readTime: '5 min read',
    summary: 'A fun real-world intern experience during Cybersecurity Month at Synergy Marine Group where identifying and explaining a Denial of Service attack unexpectedly won me a prize, office jokes, filter coffee, and a memorable first-week story.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000',
    url: 'https://www.linkedin.com/pulse/won-prize-using-denial-service-bhavadharani-k-m7bnc/?trackingId=BBSEB2IjRYKwh71GxlDiYw%3D%3D'
  }
];

export const SKILLS: Skill[] = [
  // Programming Languages
  { name: 'Python', level: 88, category: 'Programming Languages', frameworks: ['Django', 'FastAPI', 'Pandas'] },
  { name: 'Java', level: 95, category: 'Programming Languages', frameworks: ['Spring Boot', 'Hibernate'] },
  { name: 'SQL', level: 92, category: 'Programming Languages', frameworks: ['PostgreSQL', 'MySQL', 'Prisma'] },
  { name: 'JavaScript', level: 95, category: 'Programming Languages', frameworks: ['ES6+', 'D3.js'] },
  { name: 'TypeScript', level: 93, category: 'Programming Languages', frameworks: ['Next.js', 'React', 'NestJS'] },

  // Web Development & Frameworks
  { name: 'React.js', level: 95, category: 'Web Development & Frameworks', frameworks: ['Hooks', 'Vite', 'Motion'] },
  { name: 'Next.js', level: 90, category: 'Web Development & Frameworks', frameworks: ['App Router', 'SSR', 'ISR'] },
  { name: 'Node.js', level: 92, category: 'Web Development & Frameworks', frameworks: ['v18+', 'Streams', 'Events'] },
  { name: 'Express.js', level: 94, category: 'Web Development & Frameworks', frameworks: ['Middleware', 'Routing'] },

  // Databases
  { name: 'MongoDB', level: 92, category: 'Databases', frameworks: ['Mongoose', 'Aggregation'] },
  { name: 'PostgreSQL', level: 88, category: 'Databases', frameworks: ['Relational Design', 'Indexing'] },

  // Tools & Development Platforms
  { name: 'Git', level: 96, category: 'Tools & Development Platforms' },
  { name: 'GitHub', level: 92, category: 'Tools & Development Platforms' },
  { name: 'VS Code', level: 95, category: 'Tools & Development Platforms' },
  { name: 'Postman', level: 88, category: 'Tools & Development Platforms' },

  // Cloud & DevOps
  { name: 'Cloud Fundamentals', level: 80, category: 'Cloud & DevOps' },
  { name: 'Docker Basics', level: 85, category: 'Cloud & DevOps' },
  { name: 'CI/CD Basics', level: 88, category: 'Cloud & DevOps' },

  // Cybersecurity
  { name: 'Cybersecurity Fundamentals', level: 85, category: 'Cybersecurity' },
  { name: 'Cryptography', level: 80, category: 'Cybersecurity' },
  { name: 'Authentication & Authorization', level: 90, category: 'Cybersecurity', frameworks: ['OAuth', 'JWT', 'RBAC'] },
  { name: 'Security Principles', level: 88, category: 'Cybersecurity' },
  { name: 'Risk Assessment', level: 82, category: 'Cybersecurity' },

  // Software Engineering Practices
  { name: 'Agile Methodologies', level: 95, category: 'Software Engineering Practices', frameworks: ['Scrum', 'Kanban'] },
  { name: 'Prompt Engineering', level: 92, category: 'Software Engineering Practices', frameworks: ['LLM', 'RAG'] },

  // Soft Skills
  { name: 'Leadership', level: 97, category: 'Soft Skills' },
  { name: 'Communication', level: 95, category: 'Soft Skills' },
  { name: 'Decision Making', level: 95, category: 'Soft Skills' },
  { name: 'Team Collaboration', level: 94, category: 'Soft Skills' }
];

export const JOURNEY = [
  {
    year: 'Sep 2023',
    icon: '⚡',
    desc: 'Started B.Tech IT journey exploring programming, backend development, and problem solving.'
  },

  {
    year: 'Dec 2024',
    icon: '🧠',
    desc: 'Joined Infosys Pragati Cohort 3 focused on AI learning and industry-oriented development.'
  },

  {
    year: 'Jul 2025',
    icon: '👩‍💻',
    desc: 'Started DEVS NEC student developer community and mentoring initiatives.'
  },

  {
    year: 'Sep 2025',
    icon: '🏢',
    desc: 'Worked as Project Intern at Synergy Marine Group gaining enterprise workflow exposure.'
  },

  {
    year: 'Dec 2025',
    icon: '🌐',
    desc: 'Started contributing to open-source projects and collaborative development workflows.'
  },

  {
    year: 'Apr 2026',
    icon: '🚀',
    desc: 'Joined McKinsey Forward Program focused on AI, adaptability, and structured problem solving.'
  },

  {
    year: 'Future',
    icon: '◎',
    desc: 'Building scalable, secure, and AI-assisted systems with strong engineering foundations.'
  }
];

export const ABOUT_ME = `
Bhavadharani K is a high-performance software engineer specializing in SDE, AI, Full Stack, and Security.
She builds intelligent systems merging engineering, AI, and human experience.
Key projects include:
- Collaborative Text Editor: A real-time system with live synchronization and conflict-free data handling.
- Axon Dental: A MERN-based healthcare application for clinic and appointment management.
- AI Systems Lab: A collection of AI tools for developers.

Bhavadharani has mentored over 70 students and is an active open-source contributor. Her engineering philosophy emphasizes performance, human-centric AI, and security as architecture.
Technical stack: React, Node.js, MongoDB, Express, WebSockets, TypeScript, and AI integrations.
`;
