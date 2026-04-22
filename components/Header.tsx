"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, LayoutDashboard, LogIn, ShieldCheck, Home, Info, Phone } from "lucide-react";
import LogoutButton from "./LogoutButton";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [session, setSession] = useState<{ role: string } | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    fetch("/api/users/me")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setSession({ role: data.user.role });
        else setSession(null);
      })
      .catch(() => setSession(null));
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  const navLinks = [
    { href: "/", label: "Home", icon: <Home size={17} /> },
    { href: "/about", label: "About", icon: <Info size={17} /> },
    { href: "/contact", label: "Contact Us", icon: <Phone size={17} /> },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg shadow-black/5 dark:shadow-black/20" : "glass"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16">

        {/* ── Main bar ── */}
        <div className="flex justify-between items-center h-16 sm:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 btn-animate shrink-0">
            <Image
              src="/logo2.png"
              alt="Remind365 Logo"
              width={46}
              height={46}
              className="rounded-xl shadow-sm"
            />
            <span className="text-xl sm:text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 tracking-tight">
              Remind<span className="text-primary">365</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2.5 rounded-xl text-base lg:text-lg font-semibold text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2">
            {!session && (
              <>
                <Link
                  href="/admin/login"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-base lg:text-lg font-semibold text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-all duration-200"
                >
                  <ShieldCheck size={18} />
                  Admin
                </Link>
                <Link
                  href="/login"
                  className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-xl text-base lg:text-lg font-bold btn-animate shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:scale-105 transition-all"
                >
                  <LogIn size={18} />
                  Login
                </Link>
              </>
            )}

            {session?.role === "admin" && (
              <>
                <Link
                  href="/admin/dashboard"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-base lg:text-lg font-bold text-primary hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-all"
                >
                  <LayoutDashboard size={18} />
                  Admin Dashboard
                </Link>
                <div className="w-px h-6 bg-gray-200 dark:bg-gray-700 mx-1" />
                <LogoutButton />
              </>
            )}

            {session?.role === "user" && (
              <>
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-base lg:text-lg font-bold text-primary hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-all"
                >
                  <LayoutDashboard size={18} />
                  Dashboard
                </Link>
                <div className="w-px h-6 bg-gray-200 dark:bg-gray-700 mx-1" />
                <LogoutButton />
              </>
            )}
          </div>

          {/* Mobile: Login + Hamburger */}
          <div className="flex md:hidden items-center gap-2 z-50">
            {!session && (
              <Link
                href="/login"
                className="flex items-center gap-1.5 bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-xl text-sm font-bold btn-animate shadow-md shadow-indigo-500/20"
              >
                <LogIn size={15} />
                Login
              </Link>
            )}
            <button
              type="button"
              onClick={() => {
                console.log("Menu clicked, current state:", isMenuOpen);
                setIsMenuOpen(!isMenuOpen);
              }}
              className="p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 active:bg-gray-200 dark:active:bg-gray-700 transition-colors z-50 relative cursor-pointer touch-manipulation"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* ── Mobile Dropdown ── */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-[var(--glass-border)] bg-[var(--card-bg)]/98 backdrop-blur-xl py-3 space-y-0.5 animate-in fade-in slide-in-from-top-2">

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl mx-2 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-all"
              >
                <span className="text-gray-400 dark:text-gray-500">{link.icon}</span>
                {link.label}
              </Link>
            ))}

            <div className="h-px bg-gray-100 dark:bg-gray-800 mx-4 my-1" />

            {!session && (
              <Link
                href="/admin/login"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl mx-2 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-all"
              >
                <span className="text-gray-400 dark:text-gray-500"><ShieldCheck size={17} /></span>
                Admin Login
              </Link>
            )}

            {session?.role === "admin" && (
              <Link
                href="/admin/dashboard"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl mx-2 text-sm font-bold text-primary hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-all"
              >
                <LayoutDashboard size={17} />
                Admin Dashboard
              </Link>
            )}

            {session?.role === "user" && (
              <Link
                href="/dashboard"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl mx-2 text-sm font-bold text-primary hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-all"
              >
                <LayoutDashboard size={17} />
                Dashboard
              </Link>
            )}

            {session && (
              <div className="px-6 pt-1 pb-2">
                <LogoutButton />
              </div>
            )}

          </div>
        )}

      </div>
    </header>
  );
}
