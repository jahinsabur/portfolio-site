export default function ContactEditor({ content, setContent }: any) {
  const updateContact = (field: string, value: string) => {
    setContent({
      ...content,
      contact: { ...content.contact, [field]: value },
    });
  };

  const updateSocial = (field: string, value: string) => {
    setContent({
      ...content,
      social: { ...content.social, [field]: value },
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Contact & Social</h2>
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Contact Information</h3>
        
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Email
          </label>
          <input
            type="email"
            value={content.contact?.email || ''}
            onChange={(e) => updateContact('email', e.target.value)}
            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Location
          </label>
          <input
            type="text"
            value={content.contact?.location || ''}
            onChange={(e) => updateContact('location', e.target.value)}
            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Social Links</h3>
        
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            GitHub URL
          </label>
          <input
            type="text"
            value={content.social?.github || ''}
            onChange={(e) => updateSocial('github', e.target.value)}
            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            LinkedIn URL
          </label>
          <input
            type="text"
            value={content.social?.linkedin || ''}
            onChange={(e) => updateSocial('linkedin', e.target.value)}
            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Hackster URL
          </label>
          <input
            type="text"
            value={content.social?.hackster || ''}
            onChange={(e) => updateSocial('hackster', e.target.value)}
            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
          />
        </div>
      </div>
    </div>
  );
}
