'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const [skills, setSkills] = useState<string[]>([]);
  const [experience, setExperience] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);

    fetch('/api/content')
      .then((res) => res.json())
      .then((data) => {
        // Flatten skills from object to array
        const skillsArray = data.skills || [];
        setSkills(Array.isArray(skillsArray) ? skillsArray : []);
        setExperience(data.experience || []);
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
      <section id="skills" className="section-container bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse space-y-8">
            <div className="h-10 bg-slate-200 dark:bg-slate-800 rounded-lg w-64 mx-auto"></div>
            <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded-lg w-96 mx-auto"></div>
            <div className="flex flex-wrap gap-3 justify-center">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                <div key={i} className="h-10 w-32 bg-slate-200 dark:bg-slate-800 rounded-full"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (skills.length === 0) return null;

  return (
    <section id="skills" className="section-container bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center">Technical Skills</h2>
          <p className="section-subtitle text-center mx-auto">
            Tools and technologies I work with daily
          </p>
        </motion.div>

        {/* Skills as Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-3 justify-center max-w-5xl mx-auto"
        >
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              className="px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 text-slate-700 dark:text-slate-300 hover:text-primary-700 dark:hover:text-primary-300 rounded-full text-sm font-medium transition-all duration-200 cursor-default hover:scale-105"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>

        {/* Experience Timeline */}
        {experience.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
              Experience
            </h3>
            <div className="max-w-3xl mx-auto space-y-8">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className={`card border-l-4 ${
                    index === 0
                      ? 'border-primary-600 dark:border-primary-400'
                      : 'border-slate-400 dark:border-slate-600'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h4 className="text-xl font-semibold text-slate-900 dark:text-white">
                      {exp.title}
                    </h4>
                    <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <p
                    className={`font-medium mb-3 ${
                      index === 0
                        ? 'text-primary-600 dark:text-primary-400'
                        : 'text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    {exp.company}
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 mb-4">{exp.description}</p>
                  {exp.achievements && exp.achievements.length > 0 && (
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement: string, achIndex: number) => (
                        <li
                          key={achIndex}
                          className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                        >
                          <span
                            className={
                              index === 0
                                ? 'text-primary-600 dark:text-primary-400 mt-1'
                                : 'text-slate-400 dark:text-slate-600 mt-1'
                            }
                          >
                            ✓
                          </span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
