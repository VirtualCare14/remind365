"use client"; import { useState } from 'react'; import { Menu } from 'lucide-react'; import UserSidebar from '@/components/UserSidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        main { padding-top: 0 !important; }
` }} />
      <div className="flex min-h-screen">
        <UserSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <div className="flex-1 w-full overflow-y-auto bg-gray-50 dark:bg-transparent relative">          <button            onClick={() => setIsSidebarOpen(true)}            className="md:hidden fixed top-4 left-4 z-40 p-2 bg-primary text-white rounded-lg shadow-lg hover:bg-primary-hover transition-colors"            aria-label="Open menu"          >            <Menu size={20} />          </button>
          {children}
        </div>
      </div>
    </>
  );
}
