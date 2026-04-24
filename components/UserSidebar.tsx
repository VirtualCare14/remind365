"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, FilePlus, IndianRupee, X } from 'lucide-react';
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
    { name: 'All Bills', href: '/dashboard/all-bills', icon: IndianRupee },
  ];

  return (
    <aside className={`w-64 bg-orange-50 border-r border-orange-200 h-screen flex flex-col ${isMobile ? (isOpen ? 'fixed left-0 z-50' : 'hidden') : 'sticky top-0 flex-shrink-0'}`}>  
      <div className="p-6 border-b border-orange-200 bg-orange-100 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-orange-200 flex items-center justify-center text-orange-700 font-bold shadow-sm border border-orange-300">
          {userName.charAt(0).toUpperCase()}
        </div>
        <div className="flex flex-col overflow-hidden">
          <span className="text-sm font-bold text-gray-800 truncate" title={userName}>{userName}</span>
          <span className="text-xs text-gray-600">Dashboard Access</span>
        </div>
      </div>
      <div className="p-6 flex-grow">
        <h2 className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-4">Menu</h2>
        <nav className="space-y-3">
          {links.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={onClose}
                className={`flex items-center gap-3 px-5 py-4 rounded-2xl text-base md:text-lg font-semibold transition-all ${isActive ? 'bg-orange-200 text-orange-700 border border-orange-300' : 'text-gray-700 hover:bg-orange-100'}`}
              >
                <Icon size={24} />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="p-6 border-t border-orange-200">
        <LogoutButton />
      </div>
    </aside>
  );
}
