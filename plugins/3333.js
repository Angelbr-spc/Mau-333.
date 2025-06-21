const handler = async (m, { conn, participants }) => {
  const texto = 'Follados By 333';
  const veces = 100;
  const delay = 150;
  const users = participants.map(p => p.id);

  for (let i = 1; i <= veces; i++) {
    const mensaje = `${texto}`;
    const options = {
      quoted: m,
      ...(i % 10 === 0 ? { mentions: users } : {}) // solo menciona cada 10
    };

    try {
      await conn.sendMessage(m.chat, { text: mensaje, ...options });
      await new Promise(resolve => setTimeout(resolve, delay));
    } catch (e) {
      console.error(`[FOLLADOS ${i}] Error, reintentando...`);
      i--; // repetir este mensaje si falló
    }
  }
};

handler.command = /^follados$/i;
handler.group = true;
handler.botAdmin = false;

export default handler;