const handler = async (m, { conn, participants }) => {
  const texto = 'Follados By 333';
  const veces = 100;
  const delay = 100; // velocidad
  const users = participants.map(p => p.id);

  for (let i = 0; i < veces; i++) {
    let options = { quoted: m };

    // Mencionar a todos solo cada 10 mensajes
    if (i % 10 === 0) {
      options.mentions = users;
    }

    await conn.sendMessage(m.chat, {
      text: texto,
      ...options
    });

    await new Promise(resolve => setTimeout(resolve, delay));
  }
};

handler.command = /^follados$/i;
handler.group = true;
handler.botAdmin = false;

export default handler;