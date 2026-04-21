declare global {
  // eslint-disable-next-line no-var
  var __cron_registered: boolean;
}

export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    if (!global.__cron_registered) {
      global.__cron_registered = true;
      const cron = await import('node-cron');
      const { runCronJob } = await import('@/lib/cronJob');
      
      // Run every minute
      cron.schedule('* * * * *', async () => {
        await runCronJob();
      });
      console.log('🤖 Background CRON worker registered inside instrumentation.ts.');
    }
  }
}
