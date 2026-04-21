"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

import LogoutButton from './LogoutButton';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [session, setSession] = useState<{role: string} | null>(null);

  useEffect(() => {
    fetch('/api/users/me')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setSession({ role: data.user.role });
        } else {
          setSession(null);
        }
      })
      .catch(() => setSession(null));
  }, []);

  return (
    <header className="fixed top-0 w-full glass z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 btn-animate">
              <Image src="/logo.png" alt="Logo" width={40} height={40} className="rounded-xl shadow-sm" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                Remind365
              </span>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
              <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {!session && (
              <>
                <Link href="/admin/login" className="hidden sm:inline text-sm font-medium hover:text-primary transition-colors">
                  Admin Login
                </Link>
                <Link 
                  href="/login" 
                  className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold btn-animate shadow-md hover:shadow-lg"
                >
                  Login
                </Link>
              </>
            )}

            {session && session.role === 'admin' && (
              <>
                <Link href="/admin/dashboard" className="hidden sm:inline text-sm font-semibold text-primary hover:text-primary-hover">
                  Admin Dashboard
                </Link>
                <div className="hidden sm:block w-px h-6 bg-gray-200 dark:bg-gray-700 mx-2"></div>
                <LogoutButton />
              </>
            )}

            {session && session.role === 'user' && (
              <>
                <Link href="/dashboard" className="hidden sm:inline text-sm font-semibold text-primary hover:text-primary-hover">
                  Dashboard
                </Link>
                <div className="hidden sm:block w-px h-6 bg-gray-200 dark:bg-gray-700 mx-2"></div>
                <LogoutButton />
              </>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-[var(--glass-border)] bg-[var(--card-bg)]/95 backdrop-blur-md">
            <nav className="px-4 py-4 space-y-4">
              <Link href="/" className="block text-sm font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link href="/about" className="block text-sm font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
              {!session && (
                <>
                  <Link href="/admin/login" className="block text-sm font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Admin Login</Link>
                </>
              )}
              {session && session.role === 'admin' && (
                <Link href="/admin/dashboard" className="block text-sm font-semibold text-primary hover:text-primary-hover" onClick={() => setIsMenuOpen(false)}>Admin Dashboard</Link>
              )}
              {session && session.role === 'user' && (
                <Link href="/dashboard" className="block text-sm font-semibold text-primary hover:text-primary-hover" onClick={() => setIsMenuOpen(false)}>Dashboard</Link>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
