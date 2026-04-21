import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import User from '@/models/User';
import { getSession, deleteSession } from '@/lib/session';

export async function GET() {
  try {
    const session = await getSession();

    if (!session) {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }

    if (session.role === 'admin') {
      return NextResponse.json({ success: true, user: { role: 'admin', name: 'Admin', email: 'ravishukla0724@gmail.com' } });
    }

    await dbConnect();
    const user = await User.findById(session.id);

    if (!user) {
      await deleteSession();
      return NextResponse.json({ success: false, message: 'User not found' }, { status: 404 });
    }

    if (user.isDisabled) {
      await deleteSession();
      return NextResponse.json({ success: false, message: 'Account disabled. Please contact admin.' }, { status: 403 });
    }

    return NextResponse.json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        telegramChatIds: user.telegramChatIds,
        role: 'user',
      },
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}
