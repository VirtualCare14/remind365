"use client";

import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { Trash2, Edit2, UserPlus, Ban, CheckCircle, Save, X } from 'lucide-react';
import LogoutButton from '@/components/LogoutButton';

export default function AdminDashboardClient() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingUserId, setEditingUserId] = useState<string | null>(null);

  // Form states
  const [showCreate, setShowCreate] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', password: '', telegramChatIds: '', isDisabled: false
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/users');
      const data = await res.json();
      if (data.success) {
        setUsers(data.users);
      } else {
        toast.error('Failed to fetch users');
      }
    } catch {
      toast.error('Error fetching users');
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        telegramChatIds: formData.telegramChatIds.split(',').map(id => id.trim()).filter(Boolean),
      };
      
      const res = await fetch('/api/admin/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        toast.success('User created successfully');
        setFormData({ name: '', email: '', password: '', telegramChatIds: '', isDisabled: false });
        setShowCreate(false);
        fetchUsers();
      } else {
        toast.error(data.message || 'Error creating user');
      }
    } catch {
      toast.error('Server error');
    }
  };

  const startEdit = (user: any) => {
    setEditingUserId(user._id);
    setFormData({
      name: user.name,
      email: user.email,
      password: '', // blank unless changing
      telegramChatIds: user.telegramChatIds?.join(', ') || '',
      isDisabled: user.isDisabled
    });
    setShowCreate(false);
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        telegramChatIds: formData.telegramChatIds.split(',').map(id => id.trim()).filter(Boolean),
      };
      
      const res = await fetch(`/api/admin/users/${editingUserId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        toast.success('User updated successfully');
        setEditingUserId(null);
        setFormData({ name: '', email: '', password: '', telegramChatIds: '', isDisabled: false });
        fetchUsers();
      } else {
        toast.error(data.message || 'Error updating user');
      }
    } catch {
      toast.error('Server error');
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to completely delete ${name}? All their data will be lost.`)) return;
    try {
      const res = await fetch(`/api/admin/users/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        toast.success('User deleted permanently');
        fetchUsers();
      } else {
        toast.error(data.message || 'Error deleting user');
      }
    } catch {
      toast.error('Server error');
    }
  };

  const toggleDisable = async (id: string, currentlyDisabled: boolean) => {
    try {
      const res = await fetch(`/api/admin/users/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isDisabled: !currentlyDisabled }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success(`User ${!currentlyDisabled ? 'disabled' : 'enabled'} successfully`);
        fetchUsers();
      }
    } catch {
      toast.error('Server error');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">User Management</h1>
          <p className="text-gray-500 mt-1">Manage user access and details</p>
        </div>
        <div className="flex items-center gap-4">
          {!showCreate && !editingUserId && (
            <button 
              onClick={() => setShowCreate(true)}
              className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors btn-animate shadow-md"
            >
              <UserPlus size={18} />
              <span>Create New User</span>
            </button>
          )}
          <LogoutButton />
        </div>
      </div>

      {(showCreate || editingUserId) && (
        <div className="card-premium mb-8 border-l-4 border-l-primary animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">{editingUserId ? 'Edit User' : 'Create New User'}</h2>
            <button 
              onClick={() => { setShowCreate(false); setEditingUserId(null); setFormData({ name: '', email: '', password: '', telegramChatIds: '', isDisabled: false }); }}
              className="text-gray-400 hover:text-gray-600"
            >
              <X size={24} />
            </button>
          </div>
          <form onSubmit={editingUserId ? handleUpdate : handleCreate} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="input-premium" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="input-premium" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">{editingUserId ? 'New Password (leave blank to keep current)' : 'Password'}</label>
              <input required={!editingUserId} type="password" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} className="input-premium" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Telegram Chat IDs (comma separated)</label>
              <input type="text" value={formData.telegramChatIds} onChange={e => setFormData({...formData, telegramChatIds: e.target.value})} className="input-premium" placeholder="e.g. 12345678, 87654321" />
            </div>
            <div className="col-span-full flex items-center gap-2 mt-2">
              <input type="checkbox" id="isDisabled" checked={formData.isDisabled} onChange={e => setFormData({...formData, isDisabled: e.target.checked})} className="w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary" />
              <label htmlFor="isDisabled" className="text-sm font-medium">Disable this user</label>
            </div>
            <div className="col-span-full flex justify-end gap-3 mt-4">
              <button type="submit" className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-hover transition-colors flex items-center gap-2 shadow-md">
                <Save size={18} />
                <span>{editingUserId ? 'Update User' : 'Save User'}</span>
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="card-premium overflow-hidden !p-0">
        {loading ? (
          <div className="p-12 text-center text-gray-500 animate-pulse">Loading users...</div>
        ) : users.length === 0 ? (
          <div className="p-12 text-center text-gray-500">No users found. Create one.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
              <thead className="bg-gray-50 dark:bg-gray-900/50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">User</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Telegram IDs</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800 bg-transparent">
                {users.map((user) => (
                  <tr key={user._id} className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-col">
                        <span className="font-medium text-gray-900 dark:text-gray-100">{user.name}</span>
                        <span className="text-sm text-gray-500">{user.email}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {user.telegramChatIds && user.telegramChatIds.map((id: string) => (
                          <span key={id} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                            {id}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {user.isDisabled ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-400">
                          <Ban size={12} /> Disabled
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-400">
                          <CheckCircle size={12} /> Active
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end gap-3">
                        <button onClick={() => toggleDisable(user._id, user.isDisabled)} className="text-gray-500 hover:text-gray-800 dark:hover:text-white transition-colors" title={user.isDisabled ? 'Enable' : 'Disable'}>
                          {user.isDisabled ? <CheckCircle size={18} /> : <Ban size={18} />}
                        </button>
                        <button onClick={() => startEdit(user)} className="text-primary hover:text-primary-hover transition-colors" title="Edit">
                          <Edit2 size={18} />
                        </button>
                        <button onClick={() => handleDelete(user._id, user.name)} className="text-danger hover:text-red-600 transition-colors" title="Delete">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
