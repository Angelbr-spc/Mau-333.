const handler = async (m, { conn }) => {
  if (!m.isGroup) return;

  const groupMetadata = await conn.groupMetadata(m.chat);
  const participants = groupMetadata.participants;
  const botId = conn.user.jid;
  const senderId = m.sender;
  const groupOwner = groupMetadata.owner;

  const isBotAdmin = participants.find(p => p.id === botId)?.admin === 'admin' || participants.find(p => p.id === botId)?.admin === 'superadmin';
  const isUserAdmin = participants.find(p => p.id === senderId)?.admin === 'admin' || participants.find(p => p.id === senderId)?.admin === 'superadmin';

  if (!isBotAdmin) return m.reply('🚫 Necesito ser administrador para ejecutar esto.');
  if (!isUserAdmin) return m.reply('⚠️ Solo los administradores pueden usar este comando.');

  let demoted = [];

  for (let p of participants) {
    let jid = p.id;
    let isAdmin = p.admin === 'admin' || p.admin === 'superadmin';

    if (
      isAdmin &&
      jid !== botId &&     // No degradar al bot
      jid !== groupOwner   // No degradar al owner
    ) {
      try {
        await conn.groupParticipantsUpdate(m.chat, [jid], 'demote');
        demoted.push(jid);
      } catch (e) {
        console.log(`❌ Error al degradar a ${jid}`);
      }
    }
  }

  if (demoted.length === 0) return m.reply('✅ No hay administradores que degradar (excepto el owner y el bot).');
  await m.reply(`🧹 Se degradó a ${demoted.length} admin${demoted.length > 1 ? 'istradores' : 'istrador'}.`);
};

handler.customPrefix = /^demoteall$/i;
handler.command = new RegExp; // sin prefijo
handler.group = true;
handler.botAdmin = true;
handler.admin = true;

export default handler;