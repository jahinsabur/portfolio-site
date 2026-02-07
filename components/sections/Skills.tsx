'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const [skills, setSkills] = useState<any>({});
  const [experience, setExperience] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/content')
      .then((res) => res.json())
      .then((data) => {
        setSkills(data.skills || {});
        setExperience(data.experience || []);
      });
  }, []);

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="card"
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 pb-3 border-b border-slate-200 dark:border-slate-800">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {(items as string[]).map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 text-slate-700 dark:text-slate-300 hover:text-primary-700 dark:hover:text-primary-300 rounded-lg text-sm font-medium transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

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
