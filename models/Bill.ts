import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IBill extends Document {
  user: mongoose.Schema.Types.ObjectId;
  customerName: string;
  productName: string;
  billAmount: number;
  remarks: string;
  billDate: Date;
  paymentStatus: 'Paid' | 'Partial' | 'Unpaid';
  reminderDays: number;
  reminderTime: string;
  lastRemindedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const BillSchema = new Schema<IBill>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    customerName: {
      type: String,
      required: [true, 'Please provide the customer name.'],
      trim: true,
    },
    productName: {
      type: String,
      required: [true, 'Please provide the product name.'],
    },
    billAmount: {
      type: Number,
      required: [true, 'Please provide the bill amount.'],
      min: 0,
    },
    remarks: {
      type: String,
      default: '',
    },
    billDate: {
      type: Date,
      required: [true, 'Please provide the bill date.'],
      default: Date.now,
    },
    paymentStatus: {
      type: String,
      enum: ['Paid', 'Partial', 'Unpaid'],
      default: 'Unpaid',
    },
    reminderDays: {
      type: Number,
      default: 0, // e.g. 0 = exact due date, -2 = 2 days prior
    },
    reminderTime: {
      type: String,
      default: '09:00', // HH:MM 24h format
    },
    lastRemindedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Bill: Model<IBill> = mongoose.models.Bill || mongoose.model<IBill>('Bill', BillSchema);

export default Bill;
