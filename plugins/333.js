const handler = async (m, { conn }) => {
  const texto = (m.text || '').trim();
  if (!/^(\.|)?333$/i.test(texto)) return;

  await conn.sendMessage(m.chat, {
    image: { url: 'https://qu.ax/GbxoW.jpg' },
    caption: '𝐏𝐮𝐫𝐨 𝐏𝐢𝐧𝐜𝐡𝐞 𝟑𝟑𝟑 𝐀𝐥𝐯
 𝐄𝐬𝐭𝐞 𝐠𝐫𝐮𝐩𝐨 𝐬𝐞𝐫𝐚 𝐑𝐨𝐛𝐚𝐝𝐨 𝐁𝐲 𝟑𝟑𝟑
𝐘 𝐪𝐮𝐞 𝐡𝐚𝐫𝐚𝐧 𝐢𝐧𝐮𝐭𝐢𝐥𝐞𝐬 𝐧𝐚𝐝𝐚'
  }, { quoted: m });
};

handler.customPrefix = /^(\.|)?333$/i;
handler.command = new RegExp();

export default handler;