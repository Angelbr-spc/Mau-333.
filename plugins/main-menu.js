let handler = async (m, { conn, usedPrefix, command }) => {
  const img = 'https://qu.ax/GbxoW.jpg';
  const name = await conn.getName(m.sender);
  const text = `


•          𝐌𝐚𝐮/ 𝟑𝟑𝟑 / 
𝐑𝐞𝐲𝐞𝐬 𝟑’ 𝐏𝐢𝐭𝐨 𝐆𝐫𝐚𝐧𝐝𝐞

                                  



      𝐏𝐮𝐫𝐨 𝐏𝐢𝐧𝐜𝐡𝐞 𝟑𝟑𝟑 𝐀𝐥𝐯
                  𝐁𝐲 𝟑𝟑𝟑
       𝐘 𝐮𝐬𝐭𝐞𝐝𝐞𝐬 𝐪𝐮𝐞 𝐬𝐚𝐛𝐞𝐧 𝐡𝐚𝐜𝐞𝐫 𝐢𝐧𝐮𝐭𝐢𝐥𝐞𝐬?
 



┣━━━━━━━━━━━━━━┫
┃⋗ 🗣️ *𝐀𝐛𝐫𝐢𝐫*
┃⋗ 🗣️ *𝐂𝐞𝐫𝐫𝐚𝐫* 
┃⋗ 🗣️ *𝐓𝐨𝐝𝐨𝐬 / 𝐭𝐨𝐝𝐨𝐬*
┃⋗ 🗣️ *𝐋𝐢𝐧𝐤 / 𝐥𝐢𝐧𝐤* 
┃⋗ 🗣️ *𝐏𝐫𝐨𝐦𝐨𝐭𝐞* 
┃⋗ 🗣️ *𝐊𝐢𝐜𝐤 / 𝐤𝐢𝐜𝐤* 
┃⋗ 🗣️ *𝐍 / 𝐧*
┃⋗ 🗣️ *𝐃𝐞𝐥 / 𝐝𝐞𝐥*
┃⋗ 🗣️ *𝐃𝐞𝐦𝐨𝐭𝐞*
┃⋗ 🗣️ *𝐌𝐞𝐧𝐮 / 𝐦𝐞𝐧𝐮*  
┃⋗ 🗣️ 
┗━━━━━━━━━━━━━━┛


  「 *📚 𝘐𝘯𝘧𝘰 📚* 」
┣━━━━━━━━━━━━━━┫
┃⋗ 👤 *.owner*  
┃⋗ 🌟 *.grupos*  
┃⋗ 📜 *.menu*  
┃⋗ 📖 *.menu2*  
┃⋗ 📚 *.menu3* 
┃⋗ 🖇️ *.menu4* 
┃⋗ 🐶 *.menu5*
┃⋗ 🏓 *.ping*  
┃⋗ ⏳ *.runtime*  
┃⋗ 📢 *.reportar*  
┃⋗ 💡 *.sugerencia*
┗━━━━━━━━━━━━━━┛


  「 *🔎 𝘉𝘶𝘴𝘲𝘶𝘦𝘥𝘢𝘴 🔎* 」     
┣━━━━━━━━━━━━━━┫  
┃⋗ 🛒 *.mercadolibre*  
┃⋗ 🖼️ *.pinterest <texto>*  
┃⋗ 📷 *.imagen <texto>*  
┃⋗ 📹 *.imag <texto>*  
┃⋗ 🔍 *.ytsearch <búsqueda>*  
┗━━━━━━━━━━━━━━┛  


    「 *👥 𝘎𝘳𝘶𝘱𝘰𝘴 👥* 」     
┣━━━━━━━━━━━━━━┫  
┃⋗ 💡 *.record*
┃⋗ 🗑️ *.del*   
┃⋗ 🔗 *.link*  
┃⋗ ❌ *.kick @user*  
┃⋗ 🎯 *.ruletaban*  
┃⋗ 👮 *.admins < Texto >*  
┃⋗ 📣 *.todos*  
┃⋗ 🚫 *.banchat*  
┃⋗ ✅ *.unbanchat*  
┃⋗ 🚫 *.mute*  
┃⋗ ✅ *.unmute*  
┃⋗ ⏰ *.horario*  
┃⋗ 🤫 *.hidetag*  
┃⋗ 📜 *.reglas*  
┃⋗ 👻 *.fantasmas*  
┃⋗ 🔄 *.nuevolink*  
┃⋗ 🎁 *.donarsala*  
┃⋗ 🎟️ *.sorteo*  
┃⋗ 📲 *.invite <número>*  
┃⋗ 🛠️ *.group open / close*  
┃⋗ 🔓 *.grupo abrir / cerrar*  
┃⋗ 🖼️ *.setppgc*  
┃⋗ ✏️ *.setname <text>*  
┃⋗ 📝 *.setreglas + Texto*  
┃⋗ 🔓 *.abrirgrupoen minutos*  
┃⋗ 🔒 *.cerrargrupoen minutos*  
┃⋗ 👋 *.setwelcome @user + texto*  
┃⋗ 🗑️ *.delwelcome*
┃⋗ 👋 *.setbye @user + texto* 
┃⋗ 🗑️ *.delbye*
┃⋗ 📊 *.encuesta pregunta|opciones*  
┃⋗ 📈 *.promote @usuario*  
┃⋗ 📉 *.demote @usuario*  
┃⋗ 📈 *.darpoder @usuario*  
┃⋗ 📉 *.delpoder @usuario*  
┗━━━━━━━━━━━━━━┛  


  「 *📥 𝘋𝘦𝘴𝘤𝘢𝘳𝘨𝘢𝘴 📥* 」     
┣━━━━━━━━━━━━━━┫  
┃⋗ 🎧 *.play <canción>*
┃⋗ 🎧 *.play1 <canción>*
┃⋗ 🎧 *.spotify <canción>*
┃⋗ 📸 *.ig <link>*  
┃⋗ 🎥 *.fb <link>*
┃⋗ 🎥 *.tiktok <url tt>*  
┃⋗ 🖼️ *.tiktokimg <url>*  
┃⋗ 🙋 *.tiktokuser <usuario>*          
┗━━━━━━━━━━━━━━┛  


   「 *😺 𝘊𝘳𝘦𝘢𝘥𝘰𝘳 😺* 」     
┣━━━━━━━━━━━━━━┫  
┃⋗ 🛡️ *.autoadmin*  
┃⋗ ⛔ *.ban @user*
┃⋗ ✅ *.unban @user* 
┃⋗ 📈 *.dargod*  
┃⋗ 📉 *.delgod*  
┃⋗ 🧊 *.emotag*
┃⋗ 📆 *.fechas*  
┃⋗ 📢 *.anuncio*
┃⋗ 🎖️ *.darxp [@usuario]*    
┃⋗ 🔑 *.dsowner*  
┃⋗ 🔑 *.limpiar*  
┃⋗ 🌐 *.join <link>*  
┃⋗ 🔄 *.reiniciar*  
┃⋗ 🚪 *.salir*  
┃⋗ 🔄 *.update*  
┃⋗ 💱 *.aviso*  
┃⋗ 📈 *.cm*  
┃⋗ 🛠️ *.cmd*  
┗━━━━━━━━━━━━━━┛  


「 *🎨 𝘓𝘰𝘨𝘰 - 𝘮𝘢𝘬𝘦𝘳 🎨* 」     
┣━━━━━━━━━━━━━━┫  
┃⋗ ❤️ *.logocorazon <texto>*  
┃⋗ 🎄 *.logochristmas <texto>*  
┃⋗ 👩🏻‍❤️‍👨🏻 *.logopareja <texto>*  
┃⋗ 💥 *.logoglitch <texto>*  
┃⋗ 😔 *.logosad <texto>*  
┃⋗ 🎮 *.logogaming <texto>*  
┃⋗ 🌟 *.logosolitario <texto>*  
┃⋗ 🐉 *.logodragonball <texto>*  
┃⋗ ⚡ *.logoneon <texto>*  
┃⋗ 🐱 *.logogatito <texto>*  
┃⋗ 🎮 *.logochicagamer <texto>*  
┃⋗ 💪 *.logoarmy <texto>*  
┃⋗ 🍥 *.logonaruto <texto>*  
┃⋗ 🚀 *.logofuturista <texto>*  
┃⋗ ☁️ *.logonube <texto>*  
┃⋗ 👼 *.logoangel <texto>*  
┃⋗ 🌌 *.logocielo <texto>*  
┃⋗ 🎨 *.logograffiti3d <texto>*  
┃⋗ 🔲 *.logomatrix <texto>*  
┃⋗ 👻 *.logohorror <texto>*  
┃⋗ 🎭 *.logoalas <texto>*  
┃⋗ 🎮 *.logopubg <texto>*  
┃⋗ ⚔️ *.logoguerrero <texto>*  
┃⋗ 🎮 *.logopubgfem <texto>*  
┃⋗ 🏆 *.logolol <texto>*  
┃⋗ 👾 *.logoamongus <texto>*  
┃⋗ 📖 *.logoportadaplayer <texto>*  
┃⋗ 📝 *.logoportadaff <texto>*  
┃⋗ 🐅 *.logovideotiger <texto>*  
┃⋗ 🎬 *.logovideointro <texto>*  
┃⋗ 🎮 *.logovideogaming <texto>*  
┃⋗ 😿 *.sadcat <texto>*  
┃⋗ 🐦 *.tweet <comentario>*  
┗━━━━━━━━━━━━━━┛  


   「 *📸 𝘐𝘮𝘢́𝘨𝘦𝘯𝘦𝘴 📸* 」     
┣━━━━━━━━━━━━━━┫  
┃⋗ 🐱 *.neko*  
┃⋗ 🖼️ *.pinterest <búsqueda>*  
┃⋗ 💑 *.ppcouple*  
┃⋗ 💕 *.waifu*  
┗━━━━━━━━━━━━━━┛  


   「 *📴 𝘖𝘯 / 𝘖𝘧𝘧 📴* 」     
┣━━━━━━━━━━━━━━┫  
┃⋗ ✅ *.enable*  
┃⋗ ❌ *.disable*  
┗━━━━━━━━━━━━━━┛  


「 *🔧 𝘏𝘦𝘳𝘳𝘢𝘮𝘪𝘦𝘯𝘵𝘢𝘴 🔧* 」     
┣━━━━━━━━━━━━━━┫  
┃⋗ 🎙️ *.gtts <texto>*  
┃⋗ 🌦️ *.clima <ciudad/país>*  
┃⋗ 🤥 *.fake <texto/@tag/texto>*
┃⋗ 💻 *.Ia <texto>*  
┃⋗ 🖼️ *.hd*  
┃⋗ 🔠 *.morse <encode|decode>*  
┃⋗ 🔍 *.ver*  
┃⋗ 🔄 *.reenviar*  
┃⋗ 🎥 *.togifaud*  
┃⋗ 🎵 *.tomp3*  
┃⋗ 🎥 *.tovid <sticker>* 
┃⋗ 🎧 *.whatmusic* 
┗━━━━━━━━━━━━━━┛  


「 *🦅 𝘔𝘢𝘴𝘤𝘰𝘵𝘢𝘴 🦅* 」
┣━━━━━━━━━━━━━━┫
┃⋗ 🛒 *.comprar*  
┃⋗ 💲 *.contratar* 
┃⋗ 🍖 *.alimentar*  
┃⋗ 💰 *.costos*  
┃⋗ 👀 *.nombre* 
┃⋗ ☠️ *.demascota*  
┃⋗ 🐺 *.mimascota*  
┃⋗ 🐹 *.mascotas*  
┃⋗ 🦅 *.mascota*
┃⋗ 🕳️ *.excavar*
┃⋗ 🐶 *.paseo*
┃⋗ 🥎 *.pelota*
┃⋗ 🚩 *.level*
┃⋗ 🚩 *.levelmax*
┃⋗ 🔥 *.batalla 1*
┃⋗ 🛡️ *.batalla 2*
┃⋗ 🗡️ *.batalla 3*
┃⋗ 💣 *.batalla4*
┃⋗ ⚔️ *.batallainfo* 
┃⋗ 📍 *.infomasc*
┃⋗ 👥 *.viajar*
┃⋗ 🎁 *.masc*
┗━━━━━━━━━━━━━━┛


   「 *🎲 𝘋𝘪𝘷𝘦𝘳𝘴𝘪𝘰́𝘯 🎲* 」     
┣━━━━━━━━━━━━━━┫  
┃⋗ 🤗 *.abrazar <@usuario>*  
┃⋗ 🐾 *.acariciar @tag*  
┃⋗ ❓ *.acertijo*  
┃⋗ 🎲 *.dado* 
┃⋗ 🎬 *.advpeli*  
┃⋗ 🛌 *.afk <razón>*  
┃⋗ 😍 *.minovia @user*
┃⋗ 😍 *.minovio @user*
┃⋗ 🌈 *.gay <@tag> | <nombre>*  
┃⋗ 🌈 *.lesbiana <@tag> | <nombre>*  
┃⋗ 🐵 *.pajero <@tag> | <nombre>*  
┃⋗ 🇵🇪 *.peruano <@tag> | <nombre>*  
┃⋗ 🇵🇪 *.peruana <@tag> | <nombre>*  
┃⋗ 🐵 *.pajera <@tag> | <nombre>*  
┃⋗ 😈 *.puto <@tag> | <nombre>*  
┃⋗ 😈 *.puta <@tag> | <nombre>*  
┃⋗ 🤕 *.manco <@tag> | <nombre>*  
┃⋗ 🤕 *.manca <@tag> | <nombre>*  
┃⋗ 🐀 *.rata <@tag> | <nombre>*  
┃⋗ 🛑 *.prostituta <@tag> | <nombre>*  
┃⋗ 🛑 *.prostituto <@tag> | <nombre>*  
┃⋗ 💡 *.consejo*  
┃⋗ 💃 *.dance <@user>*  
┃⋗ 🔍 *.doxear <nombre> | <@tag>*  
┃⋗ 😈 *.follar*  
┃⋗ ❤️ *.formarpareja*  
┃⋗ 🌈 *.gay2*  
┃⋗ 🔞 *.horny*  
┃⋗ 🧠 *.iqtest*  
┃⋗ 💋 *.besar @tag*  
┃⋗ ❤️ *.love <@user>*  
┃⋗ 🥰 *.enamorada @tag*  
┃⋗ 😂 *.meme*  
┃⋗ 👿 *.cachuda @tag | nombre*  
┃⋗ ✊🏿 *.negra @tag | nombre*  
┃⋗ 🍼 *.adoptado @tag | nombre*  
┃⋗ 👙 *.sintetas @tag | nombre*  
┃⋗ 🍑 *.sinpoto @tag | nombre*  
┃⋗ 🍆 *.sinpito @tag | nombre*  
┃⋗ 😬 *.feo @tag | nombre*  
┃⋗ 👿 *.cachudo @tag | nombre*  
┃⋗ 😬 *.fea @tag | nombre*  
┃⋗ ✊🏿 *.negro @tag | nombre*  
┃⋗ 🍼 *.adoptada @tag | nombre*  
┃⋗ 🥷 *.nombreninja <texto>*  
┃⋗ 😈 *.penetrar @user*  
┃⋗ 🔮 *.personalidad <nombre>*  
┃⋗ 💌 *.piropo*  
┃⋗ 🎴 *.ppt*  
┃⋗ ❓ *.pregunta*  
┃⋗ 🎲 *.reto*  
┃⋗ 😭 *.triste @tag*  
┃⋗ 👫 *.ship*  
┃⋗ 🎰 *.slot <apuesta>*  
┃⋗ 😳 *.sonrojarse @tag*  
┃⋗ 🔝 *.top <texto>*  
┃⋗ 🔞 *.violar*  
┃⋗ 🌌 *.zodiac <AAAA MM DD>*  
┗━━━━━━━━━━━━━━┛ 


   「 *📌 𝘍𝘳𝘦𝘦 𝘍𝘪𝘳𝘦 📌* 」  
┣━━━━━━━━━━━━━━┫  
┃⋗ 🔥 *.4vs4*  
┃⋗ 🔥 *.6vs6*  
┃⋗ 🔥 *.8vs8*  
┃⋗ 🔥 *.12vs12*  
┃⋗ 🔥 *.16vs16*  
┃⋗ 💣 *.guerra*  
┃⋗ 🔐 *.interna*  
┃⋗ 📜 *.reglasclk*
┃⋗ ⚔️ *.scrim*  
┃⋗ 🎮 *.menu4*  
┃⋗ 🏝️ *.bermuda*  
┃⋗ 🟦 *.cuadrilatero*  
┃⋗ 🛑 *.hexagonal* 
┗━━━━━━━━━━━━━━┛  


   「 *🔉 𝘈𝘶𝘥𝘪𝘰𝘴 🔉* 」  
┣━━━━━━━━━━━━━━┫  
┃⋗ 🎵 *.bass <mp3/vn>*  
┃⋗ 🎵 *.blown <mp3/vn>*  
┃⋗ 🎵 *.deep <mp3/vn>*  
┃⋗ 🎵 *.earrape <mp3/vn>*  
┃⋗ 🎵 *.fast <mp3/vn>*  
┃⋗ 🎵 *.fat <mp3/vn>*  
┃⋗ 🎵 *.nightcore <mp3/vn>*  
┃⋗ 🎵 *.reverse <mp3/vn>*  
┃⋗ 🎵 *.robot <mp3/vn>*  
┃⋗ 🎵 *.slow <mp3/vn>*  
┃⋗ 🎵 *.smooth <mp3/vn>*  
┃⋗ 🎵 *.tupai <mp3/vn>*  
┃⋗ 🎵 *.reverb <mp3/vn>*  
┃⋗ 🎵 *.chorus <mp3/vn>*  
┃⋗ 🎵 *.flanger <mp3/vn>*  
┃⋗ 🎵 *.distortion <mp3/vn>*  
┃⋗ 🎵 *.pitch <mp3/vn>*  
┃⋗ 🎵 *.highpass <mp3/vn>*  
┃⋗ 🎵 *.lowpass <mp3/vn>*  
┃⋗ 🎵 *.underwater <mp3/vn>*  
┗━━━━━━━━━━━━━━┛  


    「 *𝘚𝘵𝘪𝘤𝘬𝘦𝘳𝘴 🏞* 」     
┣━━━━━━━━━━━━━━┫  
┃⋗ 🖼️ *.img (reply)*  
┃⋗ 💬 *.qc <texto>*  
┃⋗ 💩 *.scat*  
┃⋗ 🎨 *.sticker*  
┃⋗ 🖋️ *.wm <nombre>|<autor>*  
┃⋗ 🎞️ *.tovid <sticker>*  
┗━━━━━━━━━━━━━━┛


      「 *𝘕𝘴𝘧𝘸 🔞* 」
┣━━━━━━━━━━━━━━┫    
┃⋗ 🔞 *.booty*  
┃⋗ 🔞 *.ecchi*  
┃⋗ 🔞 *.furro*  
┃⋗ 🔞 *.lesbianas*  
┃⋗ 🔞 *.nsfwloli*  
┃⋗ 🔞 *.panties*  
┃⋗ 🔞 *.pene*  
┃⋗ 🔞 *.rule34 <búsqueda>*  
┃⋗ 🔞 *.pechos*  
┃⋗ 🔞 *.tetas*  
┃⋗ 🔞 *.trapito*  
┗━━━━━━━━━━━━━━┛


    「 *🌟 𝘙𝘗𝘎 🌟* 」     
┣━━━━━━━━━━━━━━┫  
┃⋗ 💼 *.claim*  
┃⋗ 💼 *.crimen*  
┃⋗ 🍬 *.dardulces *@user <cantidad>*  
┃⋗ 🍬 *.dulces*  
┃⋗ ⚡ *.levelup*  
┃⋗ ⛏️ *.minar*  
┃⋗ 🛍️ *.Buy*  
┃⋗ 🛍️ *.Buyall*
┃⋗ 💼 *.work*  
┗━━━━━━━━━━━━━━┛  


   「 *📂 𝘙𝘦𝘨𝘪𝘴𝘵𝘳𝘰 📂* 」  
┣━━━━━━━━━━━━━━┫  
┃⋗ 📝 *.sn*  
┃⋗ 📝 *.perfil*  
┃⋗ 📝 *.perfil @user*  
┃⋗ 📝 *.reg *<nombre.edad>*  
┃⋗ 📝 *.unreg*  
┗━━━━━━━━━━━━━━┛

`.trim();

  await conn.sendMessage(m.chat, { image: { url: img }, caption: text }, { quoted: m });
};

handler.customPrefix = /^(menu|menú|ayuda|help)$/i;
handler.command = new RegExp; // para que funcione sin prefijo
handler.register = true;

export default handler;