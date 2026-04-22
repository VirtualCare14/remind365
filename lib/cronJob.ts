import dbConnect from '@/lib/db';
import Bill from '@/models/Bill';
import User, { IUser } from '@/models/User';
import { broadcastToChatIds } from '@/lib/telegram';

export async function runCronJob() {
  try {
    await dbConnect();
    
    // Get all bills that are NOT fully paid
    const unpaidOrPartialBills = await Bill.find({
      paymentStatus: { $in: ['Unpaid', 'Partial'] }
    }).populate('user'); 

    if (!unpaidOrPartialBills.length) {
      return; 
    }

    const todayDate = new Date();
    todayDate.setHours(0, 0, 0, 0);

    let remindsSent = 0;

    for (const bill of unpaidOrPartialBills) {
      if (!bill.user || !(bill.user as unknown as IUser).telegramChatIds || (bill.user as unknown as IUser).telegramChatIds.length === 0) {
        continue; 
      }

      const billDate = new Date(bill.billDate);
      billDate.setHours(0, 0, 0, 0);
      
      const dueDate = new Date(bill.dueDate);
      dueDate.setHours(0, 0, 0, 0);
      
      const targetDate = new Date(billDate);
      targetDate.setDate(targetDate.getDate() + bill.reminderDays);

      if (todayDate >= targetDate) {
        
        const now = new Date();
        const formatter = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        });
        const currentIstTime = formatter.format(now);

        if (currentIstTime < bill.reminderTime) {
          continue; 
        }

        const lastRemindedDate = bill.lastRemindedAt ? new Date(bill.lastRemindedAt) : null;
        if (lastRemindedDate) {
          lastRemindedDate.setHours(0, 0, 0, 0);
          if (todayDate.getTime() === lastRemindedDate.getTime()) {
            continue; 
          }
        }
        
        const amt = `₹${bill.billAmount.toLocaleString()}`;
        const billDateText = new Date(bill.billDate).toLocaleDateString();
        const dueText = dueDate.toLocaleDateString();
        const productName = bill.productName || 'N/A';
        
        const message = `🚨 *Payment Reminder* 🚨\n\n*Customer:* ${bill.customerName}\n*Amount:* ${amt}\n*Remark:* ${bill.remarks || 'None'}\n*Bill Date:* ${billDateText}\n*Due Date:* ${dueText}\n *Product name:* ${productName} \n*Status:* ${bill.paymentStatus}\n\n_Please review and follow up with the customer._`;
        
        await broadcastToChatIds((bill.user as unknown as IUser).telegramChatIds, message);

        bill.lastRemindedAt = new Date();
        await bill.save();

        remindsSent++;
        console.log(`\n🔔 [${new Date().toLocaleString()}] Notification sent to Telegram! Customer: ${bill.customerName}\n`);
      }
    }

  } catch (error) {
    console.error('CRON ERROR:', error);
  }
}
