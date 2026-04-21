import { redirect } from 'next/navigation';
import { getSession } from '@/lib/session';
import AdminDashboardClient from './AdminDashboardClient';

export default async function AdminDashboard() {
  const session = await getSession();

  if (!session || session.role !== 'admin') {
    redirect('/admin/login');
  }

  return <AdminDashboardClient />;
}
