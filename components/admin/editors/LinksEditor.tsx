import { Plus, Trash2 } from 'lucide-react';

const iconOptions = [
  'github', 'linkedin', 'twitter', 'instagram', 'facebook', 
  'youtube', 'globe', 'mail', 'phone', 'link'
];

export default function LinksEditor({ content, setContent }: any) {
  const addLink = () => {
    const newLink = {
      name: 'New Link',
      url: 'https://example.com',
      icon: 'link',
    };
    setContent({
      ...content,
      links: [...(content.links || []), newLink],
    });
  };

  const updateLink = (index: number, field: string, value: string) => {
    const updated = [...content.links];
    updated[index] = { ...updated[index], [field]: value };
    setContent({ ...content, links: updated });
  };

  const deleteLink = (index: number) => {
    const updated = content.links.filter((_: any, i: number) => i !== index);
    setContent({ ...content, links: updated });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Social Links</h2>
        <button
          onClick={addLink}
          className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all"
        >
          <Plus size={18} />
          Add Link
        </button>
      </div>

      <div className="space-y-4">
        {content.links?.map((link: any, index: number) => (
          <div key={index} className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Link {index + 1}
              </h3>
              <button
                onClick={() => deleteLink(index)}
                className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all"
              >
                <Trash2 size={18} />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={link.name}
                  onChange={(e) => updateLink(index, 'name', e.target.value)}
                  className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
                  placeholder="GitHub"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Icon
                </label>
                <select
                  value={link.icon}
                  onChange={(e) => updateLink(index, 'icon', e.target.value)}
                  className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
                >
                  {iconOptions.map((icon) => (
                    <option key={icon} value={icon}>
                      {icon}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-span-3">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  URL
                </label>
                <input
                  type="text"
                  value={link.url}
                  onChange={(e) => updateLink(index, 'url', e.target.value)}
                  className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
                  placeholder="https://github.com/username"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          <strong>Available Icons:</strong> github, linkedin, twitter, instagram, facebook, youtube, globe, mail, phone, link
        </p>
      </div>
    </div>
  );
}
