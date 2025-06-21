const handler = async (m, { conn }) => {
  const texto = (m.text || '').trim();
  if (!/^(\.|)?333$/i.test(texto)) return;

  await conn.sendMessage(m.chat, {
    image: { url: 'https://qu.ax/GbxoW.jpg' },
    caption: '333'
  }, { quoted: m });
};

handler.customPrefix = /^(\.|)?333$/i;
handler.command = new RegExp();

export default handler;