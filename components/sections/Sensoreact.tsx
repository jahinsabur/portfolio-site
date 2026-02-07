'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Cpu, Radio, Gauge } from 'lucide-react';

const defaultFeatures = [
  {
    icon: Cpu,
    title: 'Custom Sensor Solutions',
    description: 'Tailored hardware and firmware for specific industrial applications',
  },
  {
    icon: Radio,
    title: 'IoT Platform',
    description: 'End-to-end connectivity from edge devices to cloud analytics',
  },
  {
    icon: Gauge,
    title: 'Real-Time Monitoring',
    description: 'Live dashboards and alerts for critical system parameters',
  },
];

export default function Sensoreact() {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/content')
      .then((res) => res.json())
      .then((data) => {
        setContent(data.sensoreact);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section id="sensoreact" className="section-container bg-gradient-to-br from-primary-50 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
        <div className="max-w-6xl mx-auto animate-pulse">
          <div className="h-10 bg-slate-200 dark:bg-slate-800 rounded w-64 mx-auto mb-4"></div>
          <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded w-96 mx-auto mb-12"></div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="h-96 bg-slate-200 dark:bg-slate-800 rounded"></div>
            <div className="h-96 bg-slate-200 dark:bg-slate-800 rounded"></div>
          </div>
        </div>
      </section>
    );
  }

  if (!content) return null;

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
          <h2 className="section-title">Sensoreact</h2>
          <p className="section-subtitle mx-auto">
            Professional sensor solutions and IoT platforms for industry
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
              {content.description}
            </p>

            <div className="space-y-4">
              {defaultFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                      <Icon size={24} className="text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href={content.websiteUrl || 'https://sensoreact.com'}
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="card bg-gradient-to-br from-primary-600 to-cyan-600 dark:from-primary-700 dark:to-cyan-700 text-white p-8">
              <h3 className="text-2xl font-bold mb-4">What We Build</h3>
              <ul className="space-y-3">
                {content.features?.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-cyan-200 mt-1">▸</span>
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-200 dark:bg-primary-800 rounded-full blur-2xl opacity-50" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-200 dark:bg-cyan-800 rounded-full blur-2xl opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
