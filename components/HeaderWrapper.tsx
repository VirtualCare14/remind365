'use client';

import { usePathname } from 'next/navigation';

export default function HeaderWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Hide the header on the user dashboard routes
  if (pathname?.startsWith('/dashboard')) {
    return null;
  }
  
  return <>{children}</>;
}
