import { Plus, Trash2 } from 'lucide-react';

export default function SkillsEditor({ content, setContent }: any) {
  const addCategory = () => {
    const categoryName = prompt('Enter category name:');
    if (categoryName) {
      setContent({
        ...content,
        skills: { ...content.skills, [categoryName]: [] },
      });
    }
  };

  const deleteCategory = (category: string) => {
    const { [category]: _, ...rest } = content.skills;
    setContent({ ...content, skills: rest });
  };

  const updateSkills = (category: string, value: string) => {
    setContent({
      ...content,
      skills: {
        ...content.skills,
        [category]: value.split('\n').filter(Boolean),
      },
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Skills</h2>
        <button
          onClick={addCategory}
          className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all"
        >
          <Plus size={18} />
          Add Category
        </button>
      </div>

      <div className="space-y-6">
        {Object.entries(content.skills || {}).map(([category, skills]: [string, any]) => (
          <div key={category} className="border border-slate-200 dark:border-slate-700 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{category}</h3>
              <button
                onClick={() => deleteCategory(category)}
                className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all"
              >
                <Trash2 size={18} />
              </button>
            </div>
            <textarea
              value={skills.join('\n')}
              onChange={(e) => updateSkills(category, e.target.value)}
              rows={6}
              className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none resize-none"
              placeholder="Enter skills, one per line"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
