'use client';

import { useEffect, useState } from 'react';
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

export default function Footer() {
  const [links, setLinks] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/content')
      .then((res) => res.json())
      .then((data) => setLinks(data.links || []));
  }, []);

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display mb-2">
              Electronics & Electrical Engineer
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Building intelligent systems for a connected world
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center flex-wrap gap-3 justify-center">
            {links.slice(0, 6).map((link, index) => {
              const Icon = iconMap[link.icon] || LinkIcon;
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-slate-800 rounded-lg hover:bg-primary-50 dark:hover:bg-slate-700 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 hover:scale-110"
                  aria-label={link.name}
                  title={link.name}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-slate-600 dark:text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} All rights reserved. Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
