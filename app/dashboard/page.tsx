"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { User, Mail, Send, Activity } from 'lucide-react';

export default function UserDashboard() {
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch('/api/users/me');
        const data = await res.json();
        
        if (res.ok && data.success) {
          setUserData(data.user);
        } else {
          // If 401 or 403 (disabled), redirect to login
          if (data.message) {
            toast.error(data.message);
          }
          router.push('/login');
          router.refresh();
        }
      } catch (err) {
        toast.error('Session error. Please login again.');
        router.push('/login');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!userData) return null;

  return (
    <div className="min-h-screen bg-orange-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Hello, {userData.name}
          </h1>
          <p className="text-gray-600 text-lg">Welcome to your dashboard</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 md:col-span-2 shadow-md">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2 border-b border-orange-200 pb-4 text-gray-800">
              <User className="text-orange-600" /> Profile Information
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-orange-50 p-4 rounded-xl border border-orange-100">
                <div className="bg-orange-100 p-3 rounded-lg shadow-sm">
                  <Mail className="text-orange-600" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">Email Address</p>
                  <p className="text-lg font-semibold text-gray-800">{userData.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-orange-50 p-4 rounded-xl border border-orange-100">
                <div className="bg-green-100 p-3 rounded-lg shadow-sm">
                  <Activity className="text-green-600" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">Account Status</p>
                  <p className="text-lg font-semibold text-green-600">Active</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 shadow-md">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2 border-b border-orange-200 pb-4 text-gray-800">
              <Send className="text-orange-600" /> Linked Chat IDs 
            </h2>
            <div className="space-y-3">
              {userData.telegramChatIds && userData.telegramChatIds.length > 0 ? (
                userData.telegramChatIds.map((id: string, index: number) => (
                  <div key={index} className="flex items-center gap-3 bg-orange-100 p-3 rounded-lg border border-orange-200">
                    <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                    <span className="font-mono text-sm font-medium text-gray-700">{id}</span>
                  </div>
                ))
              ) : (
                <div className="text-center p-6 text-gray-500">
                  <Send size={32} className="mx-auto mb-2 opacity-50" />
                  <p className="text-sm">No Telegram IDs linked to your account.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
