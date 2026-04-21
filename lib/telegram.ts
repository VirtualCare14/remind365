const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

export async function sendTelegramMessage(chatId: string, message: string) {
  if (!TELEGRAM_BOT_TOKEN) {
    console.error('TELEGRAM_BOT_TOKEN is missing in environment variables.');
    return false;
  }

  try {
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId.trim(),
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    const data = await response.json();
    
    if (!data.ok) {
      console.error(`Telegram API Error for chatId ${chatId}:`, data.description);
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('Error sending telegram message:', error);
    return false;
  }
}

export async function broadcastToChatIds(chatIds: string[], message: string) {
  if (!chatIds || chatIds.length === 0) return;
  
  const promises = chatIds.map(id => sendTelegramMessage(id, message));
  await Promise.all(promises);
}
