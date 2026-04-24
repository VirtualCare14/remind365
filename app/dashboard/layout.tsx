"use client"; import { useState } from 'react'; import { Menu, X } from 'lucide-react'; import UserSidebar from '@/components/UserSidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        main { padding-top: 0 !important; }
` }} />
      <div className="flex min-h-screen">
        <UserSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <div className="flex-1 w-full overflow-y-auto bg-gray-50 dark:bg-transparent relative">
          <nav className="md:hidden fixed top-0 left-0 right-0 z-40 bg-[#315B66] flex items-center justify-between px-4 py-2">
            <div className="flex items-center gap-2">
              <img
                src="/logo2.png"
                alt="Logo"
                className="w-12 h-12"
              />
              <h1 className="text-xl font-bold text-white">Remind<span className="text-orange-200">365</span></h1>
            </div>
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-3 bg-primary text-white rounded-lg shadow-lg hover:bg-primary-hover transition-colors"
              aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
            >
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
          <div className="md:hidden pt-16">
            {children}
          </div>
          <div className="hidden md:block">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
