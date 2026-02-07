export default function HeroEditor({ content, setContent }: any) {
  const updateHero = (field: string, value: string) => {
    setContent({
      ...content,
      hero: { ...content.hero, [field]: value },
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Hero Section</h2>
      
      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Name
        </label>
        <input
          type="text"
          value={content.hero?.name || ''}
          onChange={(e) => updateHero('name', e.target.value)}
          className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Title
        </label>
        <input
          type="text"
          value={content.hero?.title || ''}
          onChange={(e) => updateHero('title', e.target.value)}
          className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Subtitle
        </label>
        <input
          type="text"
          value={content.hero?.subtitle || ''}
          onChange={(e) => updateHero('subtitle', e.target.value)}
          className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Description
        </label>
        <textarea
          value={content.hero?.description || ''}
          onChange={(e) => updateHero('description', e.target.value)}
          rows={4}
          className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none resize-none"
        />
      </div>
    </div>
  );
}
