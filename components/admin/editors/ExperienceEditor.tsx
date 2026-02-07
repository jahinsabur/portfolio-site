import { Plus, Trash2 } from 'lucide-react';

export default function ExperienceEditor({ content, setContent }: any) {
  const addExperience = () => {
    const newExp = {
      title: 'Job Title',
      company: 'Company Name',
      period: '2023 - Present',
      description: 'Job description...',
      achievements: [],
    };
    setContent({
      ...content,
      experience: [...(content.experience || []), newExp],
    });
  };

  const updateExperience = (index: number, field: string, value: any) => {
    const updated = [...content.experience];
    updated[index] = { ...updated[index], [field]: value };
    setContent({ ...content, experience: updated });
  };

  const deleteExperience = (index: number) => {
    const updated = content.experience.filter((_: any, i: number) => i !== index);
    setContent({ ...content, experience: updated });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Experience</h2>
        <button
          onClick={addExperience}
          className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all"
        >
          <Plus size={18} />
          Add Experience
        </button>
      </div>

      <div className="space-y-6">
        {content.experience?.map((exp: any, index: number) => (
          <div key={index} className="border border-slate-200 dark:border-slate-700 rounded-lg p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Experience {index + 1}
              </h3>
              <button
                onClick={() => deleteExperience(index)}
                className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all"
              >
                <Trash2 size={18} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Job Title
                </label>
                <input
                  type="text"
                  value={exp.title}
                  onChange={(e) => updateExperience(index, 'title', e.target.value)}
                  className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  value={exp.company}
                  onChange={(e) => updateExperience(index, 'company', e.target.value)}
                  className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
                />
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Period
                </label>
                <input
                  type="text"
                  value={exp.period}
                  onChange={(e) => updateExperience(index, 'period', e.target.value)}
                  className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
                  placeholder="2023 - Present"
                />
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Description
                </label>
                <textarea
                  value={exp.description}
                  onChange={(e) => updateExperience(index, 'description', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none resize-none"
                />
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Achievements (one per line)
                </label>
                <textarea
                  value={exp.achievements?.join('\n') || ''}
                  onChange={(e) => updateExperience(index, 'achievements', e.target.value.split('\n').filter(Boolean))}
                  rows={4}
                  className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none resize-none"
                  placeholder="Achievement 1&#10;Achievement 2&#10;Achievement 3"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
