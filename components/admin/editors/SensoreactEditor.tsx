export default function SensoreactEditor({ content, setContent }: any) {
  const updateSensoreact = (field: string, value: any) => {
    setContent({
      ...content,
      sensoreact: { ...content.sensoreact, [field]: value },
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Sensoreact Section</h2>
      
      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Description
        </label>
        <textarea
          value={content.sensoreact?.description || ''}
          onChange={(e) => updateSensoreact('description', e.target.value)}
          rows={4}
          className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none resize-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Website URL
        </label>
        <input
          type="text"
          value={content.sensoreact?.websiteUrl || ''}
          onChange={(e) => updateSensoreact('websiteUrl', e.target.value)}
          className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Features (one per line)
        </label>
        <textarea
          value={content.sensoreact?.features?.join('\n') || ''}
          onChange={(e) => updateSensoreact('features', e.target.value.split('\n').filter(Boolean))}
          rows={6}
          className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none resize-none"
          placeholder="Custom Sensor Solutions&#10;IoT Platform&#10;Real-Time Monitoring"
        />
      </div>
    </div>
  );
}
