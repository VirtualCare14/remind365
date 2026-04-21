import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import User from '@/models/User';
import bcrypt from 'bcryptjs';
import { getSession } from '@/lib/session';

async function verifyAdmin() {
  const session = await getSession();
  return session && session.role === 'admin';
}

export async function GET() {
  if (!(await verifyAdmin())) {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
  }

  try {
    await dbConnect();
    const users = await User.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, users });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  if (!(await verifyAdmin())) {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
  }

  try {
    await dbConnect();
    const { name, email, password, telegramChatIds, isDisabled } = await request.json();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ success: false, message: 'Email already exists' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const checkArray = Array.isArray(telegramChatIds) ? telegramChatIds : telegramChatIds ? [telegramChatIds] : [];

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      telegramChatIds: checkArray,
      isDisabled: !!isDisabled,
    });

    return NextResponse.json({ success: true, user: newUser }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message || 'Server error' }, { status: 500 });
  }
}
