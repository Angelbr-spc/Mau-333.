const handler = async (m, { conn, participants }) => {
  if (!m.isGroup) return;
  if (!m.key.fromMe && !m.participant) return;
  const isBotAdmin = participants.find(p => p.id === conn.user.jid)?.admin;
  const isUserAdmin = participants.find(p => p.id === m.sender)?.admin;

  if (!isBotAdmin) return m.reply('🚫 Necesito ser admin para ejecutar esto.');
  if (!isUserAdmin) return m.reply('⚠️ Solo los administradores pueden usar este comando.');

  const groupMetadata = await conn.groupMetadata(m.chat);
  const groupOwner = groupMetadata.owner || groupMetadata.participants.find(p => p.admin === 'superadmin')?.id;

  let demoted = [];

  for (let p of participants) {
    let jid = p.id;
    if (
      p.admin &&
      jid !== conn.user.jid &&  // No degradar al bot
      jid !== groupOwner        // No degradar al owner
    ) {
      try {
        await conn.groupParticipantsUpdate(m.chat, [jid], 'demote');
        demoted.push(jid);
      } catch (e) {
        console.log(`❌ Error al degradar: ${jid}`);
      }
    }
  }

  if (demoted.length === 0) return m.reply('✅ No había admins que degradar (excepto el owner y el bot).');
  await m.reply(`🧹 Se degradó a ${demoted.length} admin${demoted.length > 1 ? 'istradores' : 'istrador'}.`);
};

handler.customPrefix = /^demoteall$/i;
handler.command = new RegExp;
handler.group = true;
handler.botAdmin = true;
handler.admin = true;

export default handler;