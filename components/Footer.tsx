'use client';

import { useEffect, useState } from 'react';

export default function Footer() {
  const [footer, setFooter] = useState<any>(null);

  useEffect(() => {
    fetch('/api/content')
      .then((res) => res.json())
      .then((data) => {
        setFooter(data.footer || {
          copyrightText: "© 2026 Sensoreact. Designed and built in India. All rights reserved."
        });
      });
  }, []);

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center text-slate-600 dark:text-slate-400 text-sm">
          <p>{footer?.copyrightText || "© 2026 Sensoreact. Designed and built in India. All rights reserved."}</p>
        </div>
      </div>
    </footer>
  );
}
