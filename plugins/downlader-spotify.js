import fetch from 'node-fetch';

let handler = async (m, { conn, args, command, usedPrefix }) => {
  const text = args.join(" ");
  if (!text) {
    return m.reply(
      `╭─⬣「 *•          𝐌𝐚𝐮/ 𝟑𝟑𝟑 AI* 」⬣
│ ≡◦ 🎧 *Uso correcto del comando:*
│ ≡◦ ${usedPrefix + command} shakira soltera
╰─⬣
> © •          𝐌𝐚𝐮/ 𝟑𝟑𝟑 AI`
    );
  }

  try {
    let res = await fetch(`https://api.nekorinn.my.id/downloader/spotifyplay?q=${encodeURIComponent(text)}`);
    let json = await res.json();

    if (!json.status || !json.result || !json.result.downloadUrl) {
      return m.reply(
        `╭─⬣「 *•          𝐌𝐚𝐮/ 𝟑𝟑𝟑 AI* 」⬣
│ ≡◦ ❌ *No se encontró resultado para:* ${text}
╰─⬣`
      );
    }

    let { title, artist, duration, cover, url } = json.result.metadata;
    let audio = json.result.downloadUrl;

    await conn.sendMessage(m.chat, {
      image: { url: cover },
      caption: `╭─⬣「 *MÚSICA SPOTIFY* 」⬣
│ ≡◦ 🎵 *Título:* ${title}
│ ≡◦ 👤 *Artista:* ${artist}
│ ≡◦ ⏱️ *Duración:* ${duration}
│ ≡◦ 🌐 *Spotify:* ${url}
╰─⬣`,
    }, { quoted: m });

    await conn.sendMessage(m.chat, {
      audio: { url: audio },
      mimetype: 'audio/mp4',
      ptt: false,
      fileName: `${title}.mp3`
    }, { quoted: m });

  } catch (e) {
    console.log(e);
    return m.reply(
      `╭─⬣「 *•          𝐌𝐚𝐮/ 𝟑𝟑𝟑 AI* 」⬣
│ ≡◦ ⚠️ *Error al procesar la solicitud.*
│ ≡◦ Intenta nuevamente más tarde.
╰─⬣`
    );
  }
};

handler.help = ['spotify'].map(v => v + ' <nombre>');
handler.tags = ['descargas'];
handler.command = ['spotify'];
handler.register = true;

export default handler;