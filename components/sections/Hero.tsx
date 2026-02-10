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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 grid-bg">
      {/* Animated circuit background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        
        {/* Circuit lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-500/30 to-transparent"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Name with engineering aesthetic */}
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 to-accent-500"></div>
              <h1 className="text-6xl md:text-8xl font-bold text-slate-900 dark:text-white font-display tracking-tighter">
                {content.name}
              </h1>
              <div className="flex items-center gap-3 mt-2">
                <div className="w-3 h-3 bg-accent-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                  System Online
                </span>
              </div>
            </div>

            {/* Title with monospace styling */}
            <h2 className="text-2xl md:text-4xl text-slate-700 dark:text-slate-300 font-mono font-semibold tracking-tight">
              <span className="text-primary-600 dark:text-primary-400">&gt;</span> {content.title}
            </h2>

            {/* Specialty tags with circuit board aesthetic */}
            <div className="flex flex-wrap gap-3">
              {content.subtitle?.split('|').map((item: string, index: number) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="tech-badge"
                >
                  {item.trim()}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 relative"
          >
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-accent-500/50 to-transparent"></div>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl pl-4 border-l-2 border-slate-200 dark:border-slate-800">
              {content.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mt-12"
          >
            <a
              href="#projects"
              className="btn-primary flex items-center justify-center gap-2 group"
            >
              <span>View Projects</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/cv.pdf"
              download
              className="btn-secondary flex items-center justify-center gap-2 group"
            >
              <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
              <span>Download CV</span>
            </a>
            <a
              href="#contact"
              className="btn-secondary flex items-center justify-center gap-2"
            >
              <Mail size={18} />
              <span>Contact</span>
            </a>
          </motion.div>

          {/* Oscilloscope-style scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-20 flex flex-col items-center gap-3"
          >
            <span className="text-xs font-mono text-slate-400 dark:text-slate-600 uppercase tracking-widest">
              Scroll to explore
            </span>
            <div className="relative w-6 h-10 border-2 border-primary-500/50 dark:border-primary-500/30 rounded-full flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 bg-primary-500 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
