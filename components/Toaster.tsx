"use client";

import { Toaster } from 'react-hot-toast';

export default function AppToaster() {
  return (
    <Toaster 
      position="top-right" 
      toastOptions={{
        style: {
          background: 'var(--card-bg)',
          color: 'var(--foreground)',
          border: '1px solid var(--glass-border)',
        }
      }} 
    />
  );
}
