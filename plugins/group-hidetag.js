const handler = async (m, { conn, text, participants, command }) => {
  const users = participants.map(p => p.id);
  const mensaje = text?.trim().replace(/^(\.n|\.notify|\.notificar|\.hidetag)/i, '').trim();

  if (m.quoted) {
    const quoted = m.quoted;
    const mime = (quoted.msg || quoted).mimetype || '';
    const isMedia = /image|video|sticker|audio/.test(mime);

    if (isMedia) {
      const media = await quoted.download();
      const options = { mentions: users, quoted: m };

      if (/image/.test(mime)) {
        return await conn.sendMessage(m.chat, { image: media, caption: mensaje, ...options });
      } else if (/video/.test(mime)) {
        return await conn.sendMessage(m.chat, { video: media, caption: mensaje, ...options });
      } else if (/audio/.test(mime)) {
        return await conn.sendMessage(m.chat, { audio: media, mimetype: 'audio/mpeg', ptt: true, ...options });
      } else if (/sticker/.test(mime)) {
        return await conn.sendMessage(m.chat, { sticker: media, ...options });
      }
    } else {
      return await conn.sendMessage(m.chat, { text: mensaje, mentions: users }, { quoted: m });
    }
  }

  // Si no hay nada citado, envía texto invisible + mensaje
  const invisible = String.fromCharCode(8206).repeat(4001);
  await conn.sendMessage(m.chat, {
    text: (mensaje || '🗣️') + invisible,
    mentions: users
  }, { quoted: m });
};

handler.help = ['hidetag'];
handler.tags = ['group'];
handler.command = /^(hidetag|notify|notificar|noti|n)$/i;
handler.group = true;
handler.botAdmin = true;

export default handler;