import { Plus, Trash2 } from 'lucide-react';

export default function ProjectsEditor({ content, setContent }: any) {
  const addProject = () => {
    const newProject = {
      id: Date.now(),
      title: 'New Project',
      description: '',
      problem: '',
      solution: '',
      tags: [],
      image: '',
      github: '',
      hackster: '',
    };
    setContent({
      ...content,
      projects: [...(content.projects || []), newProject],
    });
  };

  const updateProject = (index: number, field: string, value: any) => {
    const updated = [...content.projects];
    updated[index] = { ...updated[index], [field]: value };
    setContent({ ...content, projects: updated });
  };

  const deleteProject = (index: number) => {
    const updated = content.projects.filter((_: any, i: number) => i !== index);
    setContent({ ...content, projects: updated });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Projects</h2>
        <button
          onClick={addProject}
          className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all"
        >
          <Plus size={18} />
          Add Project
        </button>
      </div>

      <div className="space-y-6">
        {content.projects?.map((project: any, index: number) => (
          <div key={project.id} className="border border-slate-200 dark:border-slate-700 rounded-lg p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Project {index + 1}
              </h3>
              <button
                onClick={() => deleteProject(index)}
                className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all"
              >
                <Trash2 size={18} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={project.title}
                  onChange={(e) => updateProject(index, 'title', e.target.value)}
                  className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
                />
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Problem
                </label>
                <textarea
                  value={project.problem}
                  onChange={(e) => updateProject(index, 'problem', e.target.value)}
                  rows={2}
                  className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none resize-none"
                />
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Solution
                </label>
                <textarea
                  value={project.solution}
                  onChange={(e) => updateProject(index, 'solution', e.target.value)}
                  rows={2}
                  className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  GitHub URL
                </label>
                <input
                  type="text"
                  value={project.github}
                  onChange={(e) => updateProject(index, 'github', e.target.value)}
                  className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Hackster URL
                </label>
                <input
                  type="text"
                  value={project.hackster}
                  onChange={(e) => updateProject(index, 'hackster', e.target.value)}
                  className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
                />
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Tags (comma-separated)
                </label>
                <input
                  type="text"
                  value={project.tags?.join(', ') || ''}
                  onChange={(e) => updateProject(index, 'tags', e.target.value.split(',').map((t: string) => t.trim()))}
                  className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
                  placeholder="IoT, ESP32, Solar"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
