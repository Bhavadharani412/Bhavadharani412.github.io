/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  number: string;
  title: string;
  tag: string;
  desc: string;
  link: string;
  type: 'editor' | 'dashboard' | 'ai';
}

export interface Blog {
  id: string;
  title: string;
  date: string;
  readTime: string;
  summary: string;
  image: string;
  url: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
  frameworks?: string[];
}

export interface JourneyItem {
  year: string;
  icon: string;
  desc: string;
}

export interface Message {
  role: 'user' | 'ai';
  content: string;
  time: string;
}
