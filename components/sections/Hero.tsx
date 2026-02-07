'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, ArrowRight } from 'lucide-react';

export default function Hero() {
  const [content, setContent] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!content) {
        // Fallback content if API fails
        setContent({
          name: "Your Name",
          title: "Electronics & Electrical Engineer",
          subtitle: "Embedded Systems | IoT | Automation",
          description: "Building intelligent systems for a connected world."
        });
        setIsLoading(false);
      }
    }, 2000);

    fetch('/api/content')
      .then((res) => res.json())
      .then((data) => {
        setContent(data.hero);
        setIsLoading(false);
        clearTimeout(timer);
      })
      .catch(() => {
        clearTimeout(timer);
        setContent({
          name: "Your Name",
          title: "Electronics & Electrical Engineer",
          subtitle: "Embedded Systems | IoT | Automation",
          description: "Building intelligent systems for a connected world."
        });
        setIsLoading(false);
      });

    return () => clearTimeout(timer);
  }, [content]);

  // Show loading skeleton while fetching
  if (isLoading) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 pt-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-pulse space-y-8">
              <div className="h-16 bg-slate-200 dark:bg-slate-800 rounded-lg w-3/4 mx-auto"></div>
              <div className="h-10 bg-slate-200 dark:bg-slate-800 rounded-lg w-2/3 mx-auto"></div>
              <div className="flex justify-center gap-3">
                <div className="h-10 w-32 bg-slate-200 dark:bg-slate-800 rounded-full"></div>
                <div className="h-10 w-32 bg-slate-200 dark:bg-slate-800 rounded-full"></div>
              </div>
              <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded-lg w-full mx-auto"></div>
              <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded-lg w-5/6 mx-auto"></div>
              <div className="flex justify-center gap-4 pt-4">
                <div className="h-12 w-40 bg-slate-200 dark:bg-slate-800 rounded-lg"></div>
                <div className="h-12 w-40 bg-slate-200 dark:bg-slate-800 rounded-lg"></div>
                <div className="h-12 w-40 bg-slate-200 dark:bg-slate-800 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!content) return null;

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 pt-16">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 font-display">
              {content.name}
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-700 dark:text-slate-300 mb-8 font-medium">
              {content.title}
            </h2>
            <div className="flex flex-wrap justify-center gap-3 mb-8 text-sm md:text-base">
              {content.subtitle?.split('|').map((item: string, index: number) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full font-medium"
                >
                  {item.trim()}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {content.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#projects"
              className="btn-primary flex items-center gap-2 group"
            >
              View Projects
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/cv.pdf"
              download
              className="btn-secondary flex items-center gap-2"
            >
              <Download size={20} />
              Download CV
            </a>
            <a
              href="#contact"
              className="btn-secondary flex items-center gap-2"
            >
              <Mail size={20} />
              Contact Me
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-20"
          >
            <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-600 rounded-full mx-auto flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-600 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
