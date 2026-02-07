import { Plus, Trash2 } from 'lucide-react';

export default function SkillsEditor({ content, setContent }: any) {
  const skills = Array.isArray(content.skills) ? content.skills : [];

  const addSkill = () => {
    const newSkill = prompt('Enter skill name:');
    if (newSkill && newSkill.trim()) {
      setContent({
        ...content,
        skills: [...skills, newSkill.trim()],
      });
    }
  };

  const deleteSkill = (index: number) => {
    const updated = [...skills];
    updated.splice(index, 1);
    setContent({ ...content, skills: updated });
  };

  const updateSkill = (index: number, value: string) => {
    const updated = [...skills];
    updated[index] = value;
    setContent({ ...content, skills: updated });
  };

  const updateAllSkills = (value: string) => {
    setContent({
      ...content,
      skills: value.split('\n').filter(Boolean).map(s => s.trim()),
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Skills</h2>
        <button
          onClick={addSkill}
          className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all"
        >
          <Plus size={18} />
          Add Skill
        </button>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Skills (one per line)
        </label>
        <textarea
          value={skills.join('\n')}
          onChange={(e) => updateAllSkills(e.target.value)}
          rows={15}
          className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none resize-none font-mono text-sm"
          placeholder="ARM Cortex-M&#10;ESP32/ESP8266&#10;Raspberry Pi&#10;Python&#10;C/C++&#10;..."
        />
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Enter each skill on a new line. Skills will appear as tags on the website.
        </p>
      </div>

      <div className="border-t border-slate-200 dark:border-slate-700 pt-6">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
          Individual Skills ({skills.length})
        </h3>
        <div className="grid md:grid-cols-2 gap-3 max-h-96 overflow-y-auto">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 rounded-lg p-3">
              <input
                type="text"
                value={skill}
                onChange={(e) => updateSkill(index, e.target.value)}
                className="flex-1 bg-transparent border-none focus:outline-none text-slate-900 dark:text-white"
              />
              <button
                onClick={() => deleteSkill(index)}
                className="p-1 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-all"
                title="Delete skill"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
