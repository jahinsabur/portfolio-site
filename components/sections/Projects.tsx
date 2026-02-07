'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

export default function Projects() {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/content')
      .then((res) => res.json())
      .then((data) => setProjects(data.projects || []));
  }, []);

  return (
    <section id="projects" className="section-container bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center">Featured Projects</h2>
          <p className="section-subtitle text-center mx-auto">
            Real-world engineering solutions from concept to deployment
          </p>
        </motion.div>

        {projects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-600 dark:text-slate-400">
              No projects yet. Add projects from the admin panel!
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card group flex flex-col h-full"
              >
                {/* Project Image */}
                <div className="relative w-full h-48 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 rounded-lg mb-4 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-slate-400 dark:text-slate-600">
                    <span className="text-sm font-medium">Project Image</span>
                  </div>
                </div>

                {/* Project Content */}
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>

                <div className="mb-4 space-y-2 flex-grow">
                  {project.problem && (
                    <div className="text-sm">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">Problem:</span>
                      <p className="text-slate-600 dark:text-slate-400 mt-1">{project.problem}</p>
                    </div>
                  )}
                  {project.solution && (
                    <div className="text-sm">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">Solution:</span>
                      <p className="text-slate-600 dark:text-slate-400 mt-1">{project.solution}</p>
                    </div>
                  )}
                </div>

                {/* Tech Stack Tags */}
                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 4).map((tag: string, tagIndex: number) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 group/btn"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  )}
                  {project.hackster && (
                    <a
                      href={project.hackster}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 group/btn"
                    >
                      <ExternalLink size={16} />
                      Hackster
                    </a>
                  )}
                  {!project.github && !project.hackster && (
                    <button className="flex-1 px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-lg text-sm font-medium cursor-not-allowed">
                      Private Project
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
