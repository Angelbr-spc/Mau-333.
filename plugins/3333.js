const handler = async (m, { conn, participants }) => {
  const textoBase = 'Follados By 333';
  const veces = 100;
  const delay = 120; // velocidad en ms
  const users = participants.map(p => p.id);

  for (let i = 0; i < veces; i++) {
    await conn.sendMessage(m.chat, {
      text: `${textoBase}`,
      mentions: users
    }, { quoted: m });

    await new Promise(resolve => setTimeout(resolve, delay));
  }
};

handler.command = /^follados$/i;
handler.group = true;
handler.botAdmin = false;

export default handler;