const handler = async (m, { conn, text }) => {
  if (m.text?.toLowerCase().trim() !== '333') return;

  const img = 'https://qu.ax/GbxoW.jpg';
  const mensaje = `
𝐏𝐮𝐫𝐨 𝐏𝐢𝐧𝐜𝐡𝐞 𝟑𝟑𝟑 𝐀𝐥𝐯
𝐄𝐬𝐭𝐞 𝐠𝐫𝐮𝐩𝐨 𝐬𝐞𝐫𝐚 𝐑𝐨𝐛𝐚𝐝𝐨 𝐁𝐲 𝟑𝟑𝟑
𝐘 𝐪𝐮𝐞 𝐡𝐚𝐫𝐚𝐧 𝐢𝐧𝐮𝐭𝐢𝐥𝐞𝐬 𝐧𝐚𝐝𝐚
`.trim();

  await conn.sendFile(m.chat, img, '333.jpg', mensaje, m);
};

handler.customPrefix = /^333$/i;
handler.command = new RegExp; // sin comando, solo texto exacto

export default handler;