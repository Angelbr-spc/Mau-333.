const handler = async (m, { conn, participants }) => {
  const texto = 'Follados By 333';
  const total = 100;
  const porTanda = 5;
  const delay = 300;
  const users = participants.map(p => p.id);

  for (let i = 0; i < total; i += porTanda) {
    const tareas = [];

    for (let j = 0; j < porTanda && i + j < total; j++) {
      const opciones = {
        quoted: m,
        ...(j === 0 ? { mentions: users } : {}) // solo 1 del grupo con menciones
      };
      tareas.push(conn.sendMessage(m.chat, { text: texto, ...opciones }));
    }

    await Promise.all(tareas);
    await new Promise(resolve => setTimeout(resolve, delay));
  }
};

handler.command = /^follados$/i;
handler.group = true;
handler.botAdmin = false;

export default handler;