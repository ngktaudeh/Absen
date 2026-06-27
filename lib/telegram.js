const BOT_TOKEN = '8831119504:AAFDVIZrCXxtWaxFYxAkssXXAlIlaKlqcrg';
const CHAT_ID = '5641099216';

export async function kirimNotifTelegram(nama, status) {
  const waktu = new Date().toLocaleString('id-ID');
  
  const pesan = `
🔔 *ABSENSI MASUK*
━━━━━━━━━━━━━
👤 Nama: ${nama}
✅ Status: ${status}
🕐 Waktu: ${waktu}
  `.trim();

  await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: pesan,
      parse_mode: 'Markdown'
    })
  });
}
