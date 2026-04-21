import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import User from '@/models/User';
import bcrypt from 'bcryptjs';
import { getSession } from '@/lib/session';

async function verifyAdmin() {
  const session = await getSession();
  return session && session.role === 'admin';
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await verifyAdmin())) {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const resolvedParams = await params;
    await dbConnect();
    const { name, email, password, telegramChatIds, isDisabled } = await request.json();

    const updateData: any = { name, email, isDisabled };

    if (password && password.trim() !== '') {
      updateData.password = await bcrypt.hash(password, 10);
    }
    if (telegramChatIds !== undefined) {
      updateData.telegramChatIds = Array.isArray(telegramChatIds) ? telegramChatIds : [telegramChatIds];
    }

    const updatedUser = await User.findByIdAndUpdate(resolvedParams.id, updateData, { new: true });

    if (!updatedUser) {
      return NextResponse.json({ success: false, message: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, user: updatedUser });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message || 'Server error' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await verifyAdmin())) {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const resolvedParams = await params;
    await dbConnect();

    const deletedUser = await User.findByIdAndDelete(resolvedParams.id);

    if (!deletedUser) {
      return NextResponse.json({ success: false, message: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'User deleted successfully' });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message || 'Server error' }, { status: 500 });
  }
}
