import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Bill from '@/models/Bill';
import { getSession } from '@/lib/session';

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await getSession();
    if (!session || session.role !== 'user') {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }

    const resolvedParams = await params;
    await dbConnect();
    const body = await request.json();

    // Ensure users can only update their own bills
    const bill = await Bill.findOneAndUpdate(
      { _id: resolvedParams.id, user: session.id },
      { $set: body },
      { new: true }
    );

    if (!bill) {
      return NextResponse.json({ success: false, message: 'Bill not found or unauthorized' }, { status: 404 });
    }

    return NextResponse.json({ success: true, bill });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message || 'Server error' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await getSession();
    if (!session || session.role !== 'user') {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }

    const resolvedParams = await params;
    await dbConnect();

    const deletedBill = await Bill.findOneAndDelete({ _id: resolvedParams.id, user: session.id });

    if (!deletedBill) {
      return NextResponse.json({ success: false, message: 'Bill not found or unauthorized' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Bill deleted successfully' });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message || 'Server error' }, { status: 500 });
  }
}
