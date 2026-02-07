export default function FooterEditor({ content, setContent }: any) {
  const updateFooter = (field: string, value: any) => {
    setContent({
      ...content,
      footer: { ...content.footer, [field]: value },
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Footer Section</h2>
      
      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Copyright Text
        </label>
        <input
          type="text"
          value={content.footer?.copyrightText || '© 2026 Sensoreact. Designed and built in India. All rights reserved.'}
          onChange={(e) => updateFooter('copyrightText', e.target.value)}
          className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
          placeholder="© 2026 Sensoreact. Designed and built in India. All rights reserved."
        />
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          This text appears at the bottom of every page
        </p>
      </div>
    </div>
  );
}
