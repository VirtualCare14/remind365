"use client";

import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Download, Search, Trash2, Edit } from 'lucide-react';
import * as XLSX from 'xlsx';

export default function AllBills() {
  const [bills, setBills] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchBills();
  }, []);

  const fetchBills = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/bills');
      const data = await res.json();
      if (res.ok && data.success) {
        setBills(data.bills);
      }
    } catch {
      toast.error('Failed to fetch bills');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string, productName: string) => {
    if (!confirm(`Delete bill for ${productName}?`)) return;
    try {
      const res = await fetch(`/api/bills/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        toast.success('Bill deleted successfully');
        fetchBills();
      } else {
        toast.error('Error deleting bill');
      }
    } catch {
      toast.error('Server error');
    }
  };

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      const res = await fetch(`/api/bills/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ paymentStatus: newStatus }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success(`Payment marked as ${newStatus}`);
        fetchBills();
      }
    } catch {
      toast.error('Server error');
    }
  };

  const exportGlobalExcel = () => {
    const exportData = bills.map(b => {
      let notificationStr = 'Completed';
      if (b.paymentStatus !== 'Paid') {
        const targetDate = new Date(b.billDate);
        targetDate.setDate(targetDate.getDate() + b.reminderDays);
        targetDate.setHours(0, 0, 0, 0);
        
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        let nextDate = new Date(targetDate);
        if (today >= targetDate) {
          nextDate = new Date(today);
          const wasRemind = b.lastRemindedAt && new Date(b.lastRemindedAt).toDateString() === today.toDateString();
          const currTime = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Kolkata', hour12: false, hour: '2-digit', minute: '2-digit' }).format(new Date());
          if (wasRemind || currTime >= (b.reminderTime || '09:00')) {
            nextDate.setDate(nextDate.getDate() + 1);
          }
        }
        notificationStr = `${nextDate.toLocaleDateString()} at ${b.reminderTime || '09:00'} IST`;
      }
      return {
        'Customer Name': b.customerName,
        'Product': b.productName,
        'Amount': b.billAmount,
        'Remarks': b.remarks,
        'Bill Date': new Date(b.billDate).toLocaleDateString(),
        'Due Date': new Date(b.dueDate).toLocaleDateString(),
        'Notification': notificationStr,
        'Payment Status': b.paymentStatus
      };
    });

    const ws = XLSX.utils.json_to_sheet(exportData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "All Bills");
    XLSX.writeFile(wb, "Remind365_All_Bills.xlsx");
  };

  const exportCustomerExcel = (customerName: string, customerBills: any[]) => {
    const exportData = customerBills.map(b => {
      let notificationStr = 'Completed';
      if (b.paymentStatus !== 'Paid') {
        const targetDate = new Date(b.billDate);
        targetDate.setDate(targetDate.getDate() + b.reminderDays);
        targetDate.setHours(0, 0, 0, 0);
        
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        let nextDate = new Date(targetDate);
        if (today >= targetDate) {
          nextDate = new Date(today);
          const wasRemind = b.lastRemindedAt && new Date(b.lastRemindedAt).toDateString() === today.toDateString();
          const currTime = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Kolkata', hour12: false, hour: '2-digit', minute: '2-digit' }).format(new Date());
          if (wasRemind || currTime >= (b.reminderTime || '09:00')) {
            nextDate.setDate(nextDate.getDate() + 1);
          }
        }
        notificationStr = `${nextDate.toLocaleDateString()} at ${b.reminderTime || '09:00'} IST`;
      }
      return {
        'Customer Name': b.customerName,
        'Product': b.productName,
        'Amount': b.billAmount,
        'Remarks': b.remarks,
        'Bill Date': new Date(b.billDate).toLocaleDateString(),
        'Due Date': new Date(b.dueDate).toLocaleDateString(),
        'Notification': notificationStr,
        'Payment Status': b.paymentStatus
      };
    });

    const ws = XLSX.utils.json_to_sheet(exportData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, `${customerName} Bills`);
    XLSX.writeFile(wb, `Remind365_${customerName.replace(/ /g, '_')}_Bills.xlsx`);
  };

  const filteredBills = bills.filter(b => 
    b.customerName.toLowerCase().includes(searchTerm.toLowerCase()) || 
    b.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Group by customer
  const groupedBills: { [key: string]: any[] } = filteredBills.reduce((acc, bill) => {
    if (!acc[bill.customerName]) acc[bill.customerName] = [];
    acc[bill.customerName].push(bill);
    return acc;
  }, {});

  const getStatusColor = (status: string) => {
    if (status === 'Paid') return 'text-green-700 bg-green-100';
    if (status === 'Partial') return 'text-yellow-700 bg-yellow-100';
    return 'text-red-700 bg-red-100';
  };

  if (loading) return <div className="p-10 text-center animate-pulse">Loading Bills...</div>;

  return (
    <div className="p-6 md:p-10 w-full animate-in fade-in max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">All Bills</h1>
          <p className="text-gray-600">Manage and export all generated bills across your customers.</p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-grow md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
            <input 
              type="text" 
              placeholder="Search bills..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-premium !pl-10"
            />
          </div>
          <button 
            onClick={exportGlobalExcel}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2.5 rounded-lg font-medium flex items-center gap-2 transition-colors whitespace-nowrap shadow-md"
          >
            <Download size={18} /> <span className="hidden sm:inline">Export All</span>
          </button>
        </div>
      </div>

      <div className="space-y-8">
        {Object.keys(groupedBills).length === 0 ? (
          <div className="card-premium text-center py-12 text-gray-500">
            No bills found matching your criteria.
          </div>
        ) : (
          Object.entries(groupedBills).map(([customer, customerBills]) => (
            <div key={customer} className="card-premium !p-0 overflow-hidden shadow-sm border-[var(--glass-border)]">
              <div className="bg-gray-50 p-4 border-b border-[var(--glass-border)] flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-800">{customer} <span className="text-sm font-normal text-gray-500">({customerBills.length} items)</span></h2>
                <button 
                  onClick={() => exportCustomerExcel(customer, customerBills)}
                  className="text-xs font-semibold px-3 py-1.5 rounded-md bg-white border border-gray-200 hover:bg-gray-100 transition-colors flex items-center gap-2"
                >
                  <Download size={14} /> Export Customer
                </button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-white">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Product</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Dates</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Remarks</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Notification</th>
                      <th className="px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {customerBills.map((bill) => (
                      <tr key={bill._id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {bill.productName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold">
                          ₹{bill.billAmount.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div><span className="font-medium text-gray-600">Bill:</span> {new Date(bill.billDate).toLocaleDateString()}</div>
                          <div><span className="font-medium text-gray-600">Due:</span> <span className="text-red-500 font-medium">{new Date(bill.dueDate).toLocaleDateString()}</span></div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                          {bill.remarks || '-'}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {(() => {
                            if (bill.paymentStatus === 'Paid') {
                              return <span className="text-gray-600 italic">Completed</span>;
                            }
                            
                            const targetDate = new Date(bill.billDate);
                            targetDate.setDate(targetDate.getDate() + bill.reminderDays);
                            targetDate.setHours(0, 0, 0, 0);
                            
                            const today = new Date();
                            today.setHours(0, 0, 0, 0);
                            
                            let nextDate = new Date(targetDate);
                            
                            if (today >= targetDate) {
                              nextDate = new Date(today);
                              const wasRemindedToday = bill.lastRemindedAt && new Date(bill.lastRemindedAt).toDateString() === today.toDateString();
                              const currentIstTime = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Kolkata', hour12: false, hour: '2-digit', minute: '2-digit' }).format(new Date());
                              
                              if (wasRemindedToday || currentIstTime >= (bill.reminderTime || '09:00')) {
                                nextDate.setDate(nextDate.getDate() + 1);
                              }
                            }
                            
                            return (
                              <div className="flex flex-col">
                                <span className="font-medium text-gray-700">
                                  {nextDate.toLocaleDateString()}
                                </span>
                                <span className="text-xs text-gray-600">
                                  {bill.reminderTime || '09:00'} IST
                                </span>
                              </div>
                            );
                          })()}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <select 
                            value={bill.paymentStatus}
                            onChange={(e) => updateStatus(bill._id, e.target.value)}
                            className={`text-xs font-bold px-2 py-1 rounded-full outline-none border cursor-pointer ${getStatusColor(bill.paymentStatus)} border-transparent hover:border-gray-300 transition-colors`}
                          >
                            <option value="Paid">Paid</option>
                            <option value="Partial">Partial</option>
                            <option value="Unpaid">Unpaid</option>
                          </select>
                        </td>
                        <td className="px-6 py-4 text-right text-sm">
                          <button 
                            onClick={() => handleDelete(bill._id, bill.productName)}
                            className="text-gray-600 hover:text-red-600 transition-colors inline-block p-1"
                            title="Delete Bill"
                          >
                            <Trash2 size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
