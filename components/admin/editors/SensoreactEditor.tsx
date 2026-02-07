import { Plus, Trash2 } from 'lucide-react';

export default function SensoreactEditor({ content, setContent }: any) {
  const updateSensoreact = (field: string, value: any) => {
    setContent({
      ...content,
      sensoreact: { ...content.sensoreact, [field]: value },
    });
  };

  const updateFeature = (index: number, field: string, value: string) => {
    const updated = [...(content.sensoreact?.features || [])];
    if (typeof updated[index] === 'string') {
      // Convert old string format to object format
      updated[index] = { title: updated[index], description: '' };
    }
    updated[index] = { ...updated[index], [field]: value };
    updateSensoreact('features', updated);
  };

  const addFeature = () => {
    const updated = [...(content.sensoreact?.features || [])];
    updated.push({
      title: 'New Feature',
      description: 'Feature description'
    });
    updateSensoreact('features', updated);
  };

  const deleteFeature = (index: number) => {
    const updated = [...(content.sensoreact?.features || [])];
    updated.splice(index, 1);
    updateSensoreact('features', updated);
  };

  // Ensure features are in object format
  const features = (content.sensoreact?.features || []).map((f: any) => 
    typeof f === 'string' ? { title: f, description: '' } : f
  );

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Sensoreact Section</h2>
      
      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Section Title
        </label>
        <input
          type="text"
          value={content.sensoreact?.title || 'Sensoreact'}
          onChange={(e) => updateSensoreact('title', e.target.value)}
          className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Subtitle
        </label>
        <input
          type="text"
          value={content.sensoreact?.subtitle || 'Professional sensor solutions and IoT platforms for industry'}
          onChange={(e) => updateSensoreact('subtitle', e.target.value)}
          className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
        />
      </div>

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
          placeholder="https://sensoreact.com"
        />
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Feature Cards
          </h3>
          <button
            onClick={addFeature}
            className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-sm font-medium transition-all"
          >
            <Plus size={18} />
            Add Feature
          </button>
        </div>
        <div className="space-y-4">
          {features.map((feature: any, index: number) => (
            <div key={index} className="border border-slate-200 dark:border-slate-700 rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-slate-900 dark:text-white">Feature {index + 1}</h4>
                <button
                  onClick={() => deleteFeature(index)}
                  className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all"
                  title="Delete feature"
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
                  value={feature.title}
                  onChange={(e) => updateFeature(index, 'title', e.target.value)}
                  className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
                  placeholder="Custom Sensor Solutions"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Description
                </label>
                <textarea
                  value={feature.description}
                  onChange={(e) => updateFeature(index, 'description', e.target.value)}
                  rows={2}
                  className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none resize-none"
                  placeholder="Tailored hardware and firmware for specific industrial applications"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
