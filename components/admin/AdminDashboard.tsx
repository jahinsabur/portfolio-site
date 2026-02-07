'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import { 
  LogOut, Save, User, Briefcase, Code, Mail, 
  Building, FileText, Briefcase as BriefcaseIcon, Link
} from 'lucide-react';
import {
  HeroEditor,
  AboutEditor,
  ProjectsEditor,
  SkillsEditor,
  ExperienceEditor,
  SensoreactEditor,
  ContactEditor,
  LinksEditor,
  FooterEditor,
} from './editors';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('hero');
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const res = await fetch('/api/content');
      const data = await res.json();
      setContent(data);
    } catch (error) {
      toast.error('Failed to load content');
    } finally {
      setLoading(false);
    }
  };

  const saveContent = async () => {
    setSaving(true);
    try {
      const res = await fetch('/api/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(content),
      });

      if (res.ok) {
        toast.success('Content saved successfully!');
      } else {
        toast.error('Failed to save content');
      }
    } catch (error) {
      toast.error('An error occurred');
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin/login');
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  const tabs = [
    { id: 'hero', label: 'Hero Section', icon: User },
    { id: 'about', label: 'About', icon: FileText },
    { id: 'experience', label: 'Experience', icon: BriefcaseIcon },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'sensoreact', label: 'Sensoreact', icon: Building },
    { id: 'contact', label: 'Contact', icon: Mail },
    { id: 'links', label: 'Social Links', icon: Link },
    { id: 'footer', label: 'Footer', icon: FileText },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Toaster position="top-right" />
      
      {/* Header */}
      <header className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">
              Portfolio Admin
            </h1>
            <div className="flex items-center gap-4">
              <button
                onClick={saveContent}
                disabled={saving}
                className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all disabled:opacity-50"
              >
                <Save size={18} />
                {saving ? 'Saving...' : 'Save Changes'}
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 rounded-lg font-medium transition-all"
              >
                <LogOut size={18} />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <div className="col-span-3">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-4 sticky top-24">
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
                        activeTab === tab.id
                          ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                      }`}
                    >
                      <Icon size={20} />
                      {tab.label}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Content Area */}
          <div className="col-span-9">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6">
              {activeTab === 'hero' && <HeroEditor content={content} setContent={setContent} />}
              {activeTab === 'about' && <AboutEditor content={content} setContent={setContent} />}
              {activeTab === 'experience' && <ExperienceEditor content={content} setContent={setContent} />}
              {activeTab === 'projects' && <ProjectsEditor content={content} setContent={setContent} />}
              {activeTab === 'skills' && <SkillsEditor content={content} setContent={setContent} />}
              {activeTab === 'sensoreact' && <SensoreactEditor content={content} setContent={setContent} />}
              {activeTab === 'contact' && <ContactEditor content={content} setContent={setContent} />}
              {activeTab === 'links' && <LinksEditor content={content} setContent={setContent} />}
              {activeTab === 'footer' && <FooterEditor content={content} setContent={setContent} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
