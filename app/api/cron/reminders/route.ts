import { NextResponse } from 'next/server';
import { runCronJob } from '@/lib/cronJob';

export async function GET() {
  try {
    await runCronJob();
    return NextResponse.json({ success: true, message: 'Cron trigger completed successfully.' });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}
