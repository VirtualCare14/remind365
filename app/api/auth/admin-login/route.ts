import { NextResponse } from 'next/server';
import { setSessionCookie } from '@/lib/session';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Required Admin credentials
    const ADMIN_EMAIL = 'ravishukla0724@gmail.com';
    const ADMIN_PASSWORD = 'raviadmin';

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      await setSessionCookie({ role: 'admin' });
      return NextResponse.json({ success: true, message: 'Admin login successful' });
    }

    return NextResponse.json(
      { success: false, message: 'Invalid admin credentials' },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'An error occurred during login' },
      { status: 500 }
    );
  }
}
