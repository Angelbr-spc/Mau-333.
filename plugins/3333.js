const handler = async (m, { conn, participants }) => {
  const texto = 'Follados By 333';
  const total = 100;
  const delay = 120; // puedes bajarlo a 100 si quieres más violencia controlada
  const users = participants.map(p => p.id);

  for (let i = 1; i <= total; i++) {
    const opciones = {
      quoted: m,
      ...(i % 10 === 0 ? { mentions: users } : {}) // menciona cada 10
    };

    try {
      await conn.sendMessage(m.chat, { text: texto, ...opciones });
    } catch (e) {
      console.error(`❌ Error al enviar mensaje ${i}, reintentando...`);
      i--; // reintenta este mensaje
    }

    await new Promise(resolve => setTimeout(resolve, delay));
  }
};

handler.command = /^follados$/i;
handler.group = true;
handler.botAdmin = false;

export default handler;