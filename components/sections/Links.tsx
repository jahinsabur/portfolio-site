'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, Linkedin, Twitter, Instagram, Facebook, 
  Youtube, Globe, Mail, Phone, Link as LinkIcon 
} from 'lucide-react';

const iconMap: any = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
  facebook: Facebook,
  youtube: Youtube,
  globe: Globe,
  mail: Mail,
  phone: Phone,
  link: LinkIcon,
};

export default function Links() {
  const [links, setLinks] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/content')
      .then((res) => res.json())
      .then((data) => setLinks(data.links || []))
      .catch(() => {});
  }, []);

  if (links.length === 0) return null;

  return (
    <section id="links" className="section-container bg-slate-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center">Connect With Me</h2>
          <p className="section-subtitle text-center mx-auto">
            Find me on these platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {links.map((link, index) => {
            const Icon = iconMap[link.icon] || LinkIcon;
            return (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="card text-center group hover:scale-105 hover:shadow-xl transition-all duration-200"
              >
                <div className="flex flex-col items-center gap-3 py-2">
                  <div className="p-4 bg-primary-100 dark:bg-primary-900/30 rounded-xl group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors">
                    <Icon size={28} className="text-primary-600 dark:text-primary-400" />
                  </div>
                  <span className="text-sm font-medium text-slate-900 dark:text-white">
                    {link.name}
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
