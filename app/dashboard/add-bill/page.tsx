"use client";

import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function AddBill() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [customers, setCustomers] = useState<string[]>([]);
  const [filteredCustomers, setFilteredCustomers] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    customerName: '',
    productName: '',
    billAmount: '',
    remarks: '',
    billDate: new Date().toISOString().split('T')[0],
    dueDate: '',
    paymentStatus: 'Unpaid',
    reminderDays: 2, // Default 2 days before
    reminderTime: '09:00',
  });

  useEffect(() => {
    // Fetch unique customers for autocomplete
    const fetchCustomers = async () => {
      try {
        const res = await fetch('/api/customers');
        const data = await res.json();
        if (data.success) {
          setCustomers(data.customers);
        }
      } catch (err) {
        console.error('Failed to fetch customers', err);
      }
    };
    fetchCustomers();
  }, []);

  const handleCustomerChange = (val: string) => {
    setFormData({ ...formData, customerName: val });
    if (val.trim().length > 0) {
      const matches = customers.filter(c => c.toLowerCase().includes(val.toLowerCase()));
      setFilteredCustomers(matches);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  const selectCustomer = (name: string) => {
    setFormData({ ...formData, customerName: name });
    setShowDropdown(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        ...formData,
        billAmount: Number(formData.billAmount),
        reminderDays: Number(formData.reminderDays),
      };

      const res = await fetch('/api/bills', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        toast.success('Bill generated successfully!');
        router.push('/dashboard/all-bills');
      } else {
        toast.error(data.message || 'Error adding bill');
      }
    } catch (err) {
      toast.error('Server error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 md:p-10 w-full max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Add New Bill</h1>
        <p className="text-gray-600">Log a new sale and set automated reminders.</p>
      </div>

      <div className="card-premium">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Customer Area */}
            <div className="relative">
              <label className="block text-sm font-medium mb-1.5">Customer Name</label>
              <input 
                type="text" 
                required 
                value={formData.customerName}
                onChange={(e) => handleCustomerChange(e.target.value)}
                onFocus={() => { if(formData.customerName) setShowDropdown(true) }}
                onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
                className="input-premium"
                placeholder="Start typing..."
              />
              {showDropdown && filteredCustomers.length > 0 && (
                <ul className="absolute z-10 w-full bg-white border border-gray-200 mt-1 rounded-md shadow-lg max-h-40 overflow-y-auto">
                  {filteredCustomers.map((cust, idx) => (
                    <li 
                      key={idx} 
                      onMouseDown={() => selectCustomer(cust)}
                      className="px-4 py-2 cursor-pointer hover:bg-orange-50 border-b border-gray-100 last:border-0"
                    >
                      {cust}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">Product Name</label>
              <input 
                type="text" 
                required 
                value={formData.productName}
                onChange={(e) => setFormData({...formData, productName: e.target.value})}
                className="input-premium"
                placeholder="Product/Service details"
              />
            </div>

            <div className="relative">
              <label className="block text-sm font-medium mb-1.5">Bill Amount</label>
              <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-gray-500 text-lg">₹</span>
              <input 
                type="number" 
                step="0.01"
                min="0"
                required 
                value={formData.billAmount}
                onChange={(e) => setFormData({...formData, billAmount: e.target.value})}
                className="input-premium pl-11"
                placeholder="0.00"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">Remarks</label>
              <input 
                type="text" 
                value={formData.remarks}
                onChange={(e) => setFormData({...formData, remarks: e.target.value})}
                className="input-premium"
                placeholder="Any additional notes"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">Bill Date</label>
              <input 
                type="date" 
                required 
                value={formData.billDate}
                onChange={(e) => setFormData({...formData, billDate: e.target.value})}
                className="input-premium"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">Due Date</label>
              <input 
                type="date" 
                required 
                value={formData.dueDate}
                onChange={(e) => setFormData({...formData, dueDate: e.target.value})}
                className="input-premium"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">Payment Status</label>
              <select 
                value={formData.paymentStatus}
                onChange={(e) => setFormData({...formData, paymentStatus: e.target.value})}
                className="input-premium bg-white"
              >
                <option value="Paid">Paid</option>
                <option value="Partial">Partial</option>
                <option value="Unpaid">Unpaid</option>
              </select>
            </div>
            
            <div className="col-span-1 md:col-span-2 mt-4 pt-4 border-t border-[var(--glass-border)]">
              <h3 className="text-lg font-semibold mb-4 text-amber-600">Telegram Reminder Settings</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-1.5 text-gray-700">Days Difference (from bill date)</label>
                  <input 
                    type="number" 
                    value={formData.reminderDays}
                    onChange={(e) => setFormData({...formData, reminderDays: Number(e.target.value)})}
                    className="input-premium"
                    placeholder="e.g. 2 means 2 days after Bill Date"
                  />
                  <p className="text-xs text-gray-500 mt-1">If Unpaid, reminding begins X days after Bill Date, and repeats daily.</p>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5 text-gray-700">Time (IST)</label>
                  <input 
                    type="time" 
                    required 
                    value={formData.reminderTime}
                    onChange={(e) => setFormData({...formData, reminderTime: e.target.value})}
                    className="input-premium"
                  />
                  <p className="text-xs text-gray-500 mt-1">Scheduled time for automated alert dispatch.</p>
                </div>
              </div>
            </div>

          </div>
          
          <div className="flex justify-end pt-6 mt-6 border-t border-[var(--glass-border)]">
            <button 
              type="submit" 
              disabled={loading}
              className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed group flex gap-2 items-center"
            >
              {loading ? <span className="animate-pulse">Saving...</span> : 'Generate Bill'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
