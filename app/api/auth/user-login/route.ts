import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import dbConnect from '@/lib/db';
import User from '@/models/User';
import { setSessionCookie } from '@/lib/session';

export async function POST(request: Request) {
  try {
    await dbConnect();
    const { email, password } = await request.json();

    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
    }

    if (user.isDisabled) {
      return NextResponse.json({ success: false, message: 'Account disabled. Please contact admin.' }, { status: 403 });
    }

    const isMatch = await bcrypt.compare(password, user.password!);

    if (!isMatch) {
      return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
    }

    await setSessionCookie({ id: user._id.toString(), role: 'user' });

    return NextResponse.json({ success: true, message: 'User login successful' });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}
