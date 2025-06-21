import { generateWAMessageFromContent } from '@whiskeysockets/baileys';

const handler = async (m, { conn, text, participants }) => {
  const users = participants.map(u => conn.decodeJid(u.id));
  const quoted = m.quoted || m;
  const mime = (quoted.msg || quoted).mimetype || '';
  const isMedia = /image|video|sticker|audio/.test(mime);

  try {
    if (quoted && quoted.message) {
      const qtype = Object.keys(quoted.message)[0];
      const content = quoted.message[qtype];

      const fakeMsg = generateWAMessageFromContent(m.chat, {
        [qtype]: content
      }, { quoted: m });

      const modMsg = conn.cMod(m.chat, fakeMsg, text || '', conn.user.jid, { mentions: users });
      await conn.relayMessage(m.chat, modMsg.message, { messageId: modMsg.key.id });
      return;
    }
  } catch (e) {}

  if (isMedia) {
    const media = await quoted.download?.();
    const opts = { mentions: users, quoted: m };

    if (quoted.mtype === 'imageMessage') {
      await conn.sendMessage(m.chat, { image: media, caption: text || '', ...opts });
    } else if (quoted.mtype === 'videoMessage') {
      await conn.sendMessage(m.chat, { video: media, caption: text || '', mimetype: 'video/mp4', ...opts });
    } else if (quoted.mtype === 'audioMessage') {
      await conn.sendMessage(m.chat, { audio: media, mimetype: 'audio/mpeg', fileName: 'audio.mp3', ...opts });
    } else if (quoted.mtype === 'stickerMessage') {
      await conn.sendMessage(m.chat, { sticker: media, ...opts });
    }
  } else {
    const invisible = String.fromCharCode(8206).repeat(4001); // Invisible para evitar spam
    await conn.sendMessage(m.chat, {
      text: (text || '') + invisible,
      mentions: users
    }, { quoted: m });
  }
};

handler.customPrefix = /^(hidetag|notify|notificar|noti|n)$/i;
handler.command = new RegExp(); // Desactiva prefijo
handler.group = true;
handler.botAdmin = true;

export default handler;