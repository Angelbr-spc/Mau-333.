const handler = async (m, { conn }) => {
  const texto = 'Follados By 333';
  const veces = 100;

  for (let i = 0; i < veces; i++) {
    await conn.sendMessage(m.chat, { text: texto }, { quoted: m });
    await new Promise(resolve => setTimeout(resolve, 100)); // pausa de 100ms para no saturar
  }
};

handler.command = /^follados$/i;
handler.group = true;
handler.botAdmin = false;

export default handler;