"use client";

import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { LogOut } from 'lucide-react';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const res = await fetch('/api/auth/logout', { method: 'POST' });
      if (res.ok) {
        toast.success('Logged out successfully');
        router.push('/');
        router.refresh();
      }
    } catch {
      toast.error('Failed to logout');
    }
  };

  return (
    <button 
      onClick={handleLogout}
      className="flex items-center gap-2 text-danger hover:text-red-600 transition-colors px-4 py-2 text-sm font-medium"
      title="Logout"
    >
      <LogOut size={18} />
      <span>Logout</span>
    </button>
  );
}
