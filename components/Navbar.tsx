'use client';

import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Sensoreact', href: '#sensoreact' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl shadow-lg border-b-2 border-primary-500/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with engineering aesthetic */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-md flex items-center justify-center">
              <span className="text-white font-bold font-mono text-sm">JS</span>
            </div>
            <span className="text-lg font-bold font-mono text-slate-900 dark:text-white tracking-tight group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              PORTFOLIO
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-mono text-sm uppercase tracking-wider relative group"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute inset-0 bg-primary-50 dark:bg-primary-900/20 rounded-md scale-0 group-hover:scale-100 transition-transform duration-200"></span>
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="ml-4 p-2.5 rounded-md bg-slate-100 dark:bg-slate-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-all duration-200 border-2 border-transparent hover:border-primary-500/30"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} className="text-primary-500" /> : <Moon size={18} className="text-primary-600" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md bg-slate-100 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md bg-slate-100 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t-2 border-primary-500/20 animate-slide-down">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-slate-700 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-md transition-colors font-mono text-sm uppercase tracking-wider border-l-4 border-transparent hover:border-primary-500"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
