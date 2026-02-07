'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Cpu, Radio, Gauge } from 'lucide-react';

const defaultIconMap: any = {
  'Custom Sensor Solutions': Cpu,
  'IoT Platform': Radio,
  'Real-Time Monitoring': Gauge,
};

export default function Sensoreact() {
  const [content, setContent] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);

    fetch('/api/content')
      .then((res) => res.json())
      .then((data) => {
        setContent(data.sensoreact);
        setIsLoading(false);
        clearTimeout(timer);
      })
      .catch(() => {
        setIsLoading(false);
        clearTimeout(timer);
      });

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <section id="sensoreact" className="section-container bg-gradient-to-br from-primary-50 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="animate-pulse space-y-8">
            <div className="h-10 bg-slate-200 dark:bg-slate-800 rounded-lg w-64 mx-auto"></div>
            <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded-lg w-96 mx-auto"></div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="h-96 bg-slate-200 dark:bg-slate-800 rounded-lg"></div>
              <div className="h-96 bg-slate-200 dark:bg-slate-800 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!content) return null;

  // Handle both old string format and new object format for features
  const features = (content.features || []).map((f: any) => 
    typeof f === 'string' ? { title: f, description: '' } : f
  );

  return (
    <section id="sensoreact" className="section-container bg-gradient-to-br from-primary-50 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold mb-4">
            FOUNDER & CREATOR
          </div>
          <h2 className="section-title">{content.title || 'Sensoreact'}</h2>
          <p className="section-subtitle mx-auto">
            {content.subtitle || 'Professional sensor solutions and IoT platforms for industry'}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed text-center whitespace-pre-line">
              {content.description}
            </p>

            {/* All 6 features in a card */}
            <div className="card bg-gradient-to-br from-primary-600 to-cyan-600 dark:from-primary-700 dark:to-cyan-700 text-white p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">What We Build</h3>
              <ul className="space-y-4">
                {features.map((feature: any, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-cyan-200 mt-1 text-xl">▸</span>
                    <div>
                      <span className="text-white font-semibold text-lg">{feature.title}</span>
                      {feature.description && (
                        <p className="text-white/90 text-sm mt-1">{feature.description}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {content.websiteUrl && (
              <div className="text-center">
                <a
                  href={content.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 btn-primary group"
                >
                  Visit Sensoreact Website
                  <ExternalLink
                    size={20}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </a>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
