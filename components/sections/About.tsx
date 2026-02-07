'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Zap, Lightbulb } from 'lucide-react';

const iconMap: any = {
  'Hands-On Engineering': Cpu,
  'Full-Stack Embedded': Code2,
  'Power & Energy Systems': Zap,
  'Problem-Solver Mindset': Lightbulb,
};

export default function About() {
  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    fetch('/api/content')
      .then((res) => res.json())
      .then((data) => setContent(data.about));
  }, []);

  if (!content) return null;

  return (
    <section id="about" className="section-container bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center">About Me</h2>
          <p className="section-subtitle text-center mx-auto">
            Electronics engineer with a passion for building intelligent systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
              {content.summary}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="card">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                Core Focus Areas
              </h3>
              <ul className="space-y-3">
                {content.focusAreas?.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                    <span className="text-primary-600 dark:text-primary-400 mt-1">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.highlights?.map((item: any, index: number) => {
            const Icon = iconMap[item.title] || Lightbulb;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card text-center group hover:scale-105"
              >
                <div className="inline-flex p-4 bg-primary-100 dark:bg-primary-900/30 rounded-xl mb-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors">
                  <Icon size={32} className="text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
