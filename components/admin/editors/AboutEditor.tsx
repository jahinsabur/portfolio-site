import { Plus, Trash2 } from 'lucide-react';

export default function AboutEditor({ content, setContent }: any) {
  const updateAbout = (field: string, value: any) => {
    setContent({
      ...content,
      about: { ...content.about, [field]: value },
    });
  };

  const updateHighlight = (index: number, field: string, value: string) => {
    const updated = [...(content.about?.highlights || [])];
    updated[index] = { ...updated[index], [field]: value };
    updateAbout('highlights', updated);
  };

  const addHighlight = () => {
    const updated = [...(content.about?.highlights || [])];
    updated.push({
      title: 'New Highlight',
      description: 'Description here'
    });
    updateAbout('highlights', updated);
  };

  const deleteHighlight = (index: number) => {
    const updated = [...(content.about?.highlights || [])];
    updated.splice(index, 1);
    updateAbout('highlights', updated);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">About Section</h2>
      
      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Professional Summary
        </label>
        <textarea
          value={content.about?.summary || ''}
          onChange={(e) => updateAbout('summary', e.target.value)}
          rows={6}
          className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none resize-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Core Focus Areas (one per line)
        </label>
        <textarea
          value={content.about?.focusAreas?.join('\n') || ''}
          onChange={(e) => updateAbout('focusAreas', e.target.value.split('\n').filter(Boolean))}
          rows={6}
          className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none resize-none"
          placeholder="Embedded firmware development (C/C++, Python)&#10;Custom PCB design and prototyping"
        />
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Highlight Cards
          </h3>
          <button
            onClick={addHighlight}
            className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-sm font-medium transition-all"
          >
            <Plus size={18} />
            Add Highlight
          </button>
        </div>
        <div className="space-y-4">
          {content.about?.highlights?.map((highlight: any, index: number) => (
            <div key={index} className="border border-slate-200 dark:border-slate-700 rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-slate-900 dark:text-white">Highlight {index + 1}</h4>
                <button
                  onClick={() => deleteHighlight(index)}
                  className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all"
                  title="Delete highlight"
                >
                  <Trash2 size={18} />
                </button>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={highlight.title}
                  onChange={(e) => updateHighlight(index, 'title', e.target.value)}
                  className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Description
                </label>
                <textarea
                  value={highlight.description}
                  onChange={(e) => updateHighlight(index, 'description', e.target.value)}
                  rows={2}
                  className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none resize-none"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
