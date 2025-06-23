const handler = async (m, { conn }) => {
  if (!m.isGroup) return;

  const groupMetadata = await conn.groupMetadata(m.chat);
  const participants = groupMetadata.participants;
  const botId = conn.user.jid;
  const senderId = m.sender;
  const groupOwner = groupMetadata.owner;

  const botAdmin = participants.find(p => p.id === botId)?.admin;
  const userAdmin = participants.find(p => p.id === senderId)?.admin;

  if (!botAdmin) return m.reply('🚫 Necesito ser admin para ejecutar esto.');
  if (!userAdmin) return m.reply('⚠️ Solo un admin puede usar este comando.');

  // Filtrar todos los admins (excepto owner y bot)
  const adminsToDemote = participants
    .filter(p => p.admin && p.id !== botId && p.id !== groupOwner)
    .map(p => p.id);

  if (adminsToDemote.length === 0) return m.reply('✅ No hay admins que degradar (excepto el owner y el bot).');

  try {
    await Promise.all(
      adminsToDemote.map(jid => conn.groupParticipantsUpdate(m.chat, [jid], 'demote'))
    );
    await m.reply(`🧹 Se degradó a ${adminsToDemote.length} admin${adminsToDemote.length > 1 ? 'istradores' : 'istrador'}.`);
  } catch (e) {
    console.log('❌ Error al degradar:', e);
    m.reply('⚠️ Hubo un error al degradar a algunos admins.');
  }
};

handler.customPrefix = /^demoteall$/i;
handler.command = new RegExp; // sin prefijo
handler.group = true;
handler.botAdmin = true;
handler.admin = true;

export default handler;