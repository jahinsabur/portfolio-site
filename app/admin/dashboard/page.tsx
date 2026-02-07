'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import AdminDashboard from '@/components/admin/AdminDashboard';

export default function DashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/auth/check')
      .then((res) => res.json())
      .then((data) => {
        if (!data.authenticated) {
          router.push('/admin/login');
        } else {
          setLoading(false);
        }
      });
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return <AdminDashboard />;
}
