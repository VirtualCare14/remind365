"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, FilePlus, Receipt, X } from 'lucide-react';
import LogoutButton from './LogoutButton';

export default function UserSidebar({ isOpen, onClose }: { isOpen?: boolean; onClose?: () => void }) {
  const pathname = usePathname();
  const [userName, setUserName] = useState<string>('Loading...');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch('/api/users/me');
        const data = await res.json();
        if (data.success && data.user) {
          setUserName(data.user.name);
        } else {
          setUserName('User');
        }
      } catch {
        setUserName('User');
      }
    };
    fetchProfile();
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const links = [
    { name: 'Dashboard Home', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Add Bill', href: '/dashboard/add-bill', icon: FilePlus },
    { name: 'All Bills', href: '/dashboard/all-bills', icon: Receipt },
  ];

  return (
    <aside className={`w-64 bg-[var(--card-bg)] border-r border-[var(--glass-border)] h-screen flex flex-col ${isMobile ? (isOpen ? 'fixed left-0 z-50' : 'hidden') : 'sticky top-0 flex-shrink-0'}`}>  
      <div className="p-6 border-b border-[var(--glass-border)] bg-gray-50/50 dark:bg-gray-800/30 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shadow-sm border border-primary/10">
          {userName.charAt(0).toUpperCase()}
        </div>
        <div className="flex flex-col overflow-hidden">
          <span className="text-sm font-bold text-gray-900 dark:text-gray-100 truncate" title={userName}>{userName}</span>
          <span className="text-xs text-gray-500">Dashboard Access</span>
        </div>
      </div>
      <div className="p-6 flex-grow">
        <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Menu</h2>
        <nav className="space-y-2">
          {links.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={onClose}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${isActive ? 'bg-primary/10 text-primary' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
              >
                <Icon size={20} />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="p-6 border-t border-[var(--glass-border)]">
        <LogoutButton />
      </div>
    </aside>
  );
}
