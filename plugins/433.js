const handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) return m.reply(`*📲 Usa el comando así:*\n\n${usedPrefix + command} 5219991234567`);

  const number = args[0].replace(/[^0-9]/g, '');
  if (!/^\d{10,15}$/.test(number)) return m.reply('❗ El número no es válido. Asegúrate de incluir lada, por ejemplo: 5219991234567');

  try {
    const result = await conn.onWhatsApp(number + '@s.whatsapp.net');
    if (result && result.length > 0 && result[0].exists) {
      m.reply(`❌ *El número +${number} NO está en soporte de WhatsApp.*`);
    } else {
      m.reply(`✅ *El número +${number}  está en soporte de WhatsApp.*`);
    }
  } catch (e) {
    console.error(e);
    m.reply('⚠️ Ocurrió un error al verificar el número.');
  }
};

handler.command = /^wt$/i;
handler.help = ['wt <número>'];
handler.tags = ['herramientas'];
handler.register = false;
export default handler;