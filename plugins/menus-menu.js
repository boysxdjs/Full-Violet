import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: '2-digit', month: '2-digit', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = ` 𓍢ִ໋💜⊹ 𝗩𝗜𝗢𝗟𝗘𝗧 𝗕𝗢𝗧  𓍢ִ໋💜⊹

  *Ey , Hola VioletLovers ${taguser} Te Presento Este Bot  𓍢ִ໋💜⊹*

╔══════❀ ・ ° ・ ❀══════╗
 ► 𓍢ִ໋💜⊹ Creador : Cristhofer
 ► 𓍢ִ໋💜⊹ Numero ; +54 9 3751 50-9176
 ► 𓍢ִ໋💜⊹ Adquirir : +51 936 994 155
 ► 𓍢ִ໋💜⊹ Ig : https://instagram.com/_dianita.dzn
 ► 𓍢ִ໋💜⊹ VioletCoins ${money}
 ${readMore}
╚══════❀ ・ ° ・ ❀══ ════╝

 *« MENUS ADICIONALES »*
 
╔══════❀ ・ ° ・ ❀══════╗
 ► 𓍢ִ໋💜⊹ _${usedPrefix}labiblia_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}ListaVs_
╚══════❀ ・ ° ・ ❀══ ════╝

 *« COMANDOS BOT »*

╔══════❀ ・ ° ・ ❀══════╗
 ► 𓍢ִ໋💜⊹ _${usedPrefix}grupos_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}estado_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}reporte *<txt>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}join *<wagp_url>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}fixmsgespera_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}new_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}enable restrict_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}disable restrict_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}enable autoread_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}disable autoread_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}enable antispam_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}disable antispam_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}enable anticall_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}disable anticall_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}enable modoia_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}disable modoia_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}enable audios_bot_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}disable audios_bot_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}enable antiprivado_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}disable antiprivado_
╚══════❀ ・ ° ・ ❀══ ════╝

 *« JUEGOS »*

╔══════❀ ・ ° ・ ❀══════╗
 ► 𓍢ִ໋💜⊹ _${usedPrefix}nalga *<nombre / @tag>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}follar *<nombre / @tag>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}huevo *<nombre / @tag>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}abrazo *<nombre / @tag>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}cuando_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}ship5_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}minovio *<nombre / @tag>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}minovia *<nombre / @tag>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}formartrio_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}zodiac *<Txt>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}odio *<nombre / @tag>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}insultar *<nombre / @tag>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}sorteo *<Txt>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}violar *<nombre / @tag>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}sega_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}ship2_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}fake *<txt1> <@tag> <txt2>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}ppt *<papel / tijera /piedra>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}prostituto *<nombre / @tag>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}prostituta *<nombre / @tag>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}gay2 *<nombre / @tag>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}lesbiana *<nombre / @tag>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}pajero *<nombre / @tag>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}pajera *<nombre / @tag>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}puto *<nombre / @tag>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}puta *<nombre / @tag>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}manco *<nombre / @tag>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}manca *<nombre / @tag>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}rata *<nombre / @tag>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}love *<nombre / @tag>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}doxear *<nombre / @tag>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}pregunta *<txt>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}suitpvp *<@tag>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}slot *<apuesta>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}ttt *<nombre sala>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}delttt_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}acertijo_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}simi *<txt>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}top *<txt>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}topgays_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}topotakus_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}formarpareja_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}verdad_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}reto_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}cancion_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}pista_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}akinator_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}wordfind_
╚══════❀ ・ ° ・ ❀══ ════╝

 *« Enable / Disable »*

╔══════❀ ・ ° ・ ❀══════╗
 ► 𓍢ִ໋💜⊹ _${usedPrefix}enable *welcome*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}disable *welcome*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}enable *modohorny*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}disable *modohorny*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}enable *antilink*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}disable *antilink*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}enable *antilink2*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}disable *antilink2*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}enable *detect*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}disable *detect*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}enable *audios*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}disable *audios*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}enable *autosticker*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}disable *autosticker*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}enable *antiviewonce*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}disable *antiviewonce*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}enable *antitoxic*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}disable *antitoxic*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}enable *antitraba*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}disable *antitraba*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}enable *antiarabes*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}disable *antiarabes*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}enable *modoadmin*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}disable *modoadmin*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}enable *antidelete*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}disable *antidelete*_
╚══════❀ ・ ° ・ ❀══ ════╝

 *« DESCARGAS »*

╔══════❀ ・ ° ・ ❀══════╗
 ► 𓍢ִ໋💜⊹ _${usedPrefix}instagram *<url>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}mediafire *<url>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}gitclone *<url>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}gdrive *<url>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}tiktok *<url>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}tiktokimg *<url>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}xnxxdl *<url>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}xvideosdl *<url>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}twitter *<url>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}fb *<url>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}ytshort *<url>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}dapk2 *<url>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}stickerpack *<url>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}play *<txt>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}ringtone *<txt>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}soundcloud *<txt>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}img *<txt>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}pinterest *<txt>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}wallpaper *<txt>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}pptiktok *<user>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}igstalk *<user>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}igstory *<user>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}tiktokstalk *<user>*_
╚══════❀ ・ ° ・ ❀══ ════╝

 *« BUSCADORES »*

╔══════❀ ・ ° ・ ❀══════╗
 ► 𓍢ִ໋💜⊹ _${usedPrefix}githubsearch *<txt>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}pelisplus *<txt>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}modapk *<txt>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}stickersearch *<txt>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}stickersearch2 *<txt>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}xnxxsearch *<txt>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}animeinfo *<txt>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}google *<txt>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}letra *<txt>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}wikipedia *<txt>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}ytsearch *<txt>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}playstore *<txt>*_
╚══════❀ ・ ° ・ ❀══ ════╝

 *« GRUPOS »* 

╔══════❀ ・ ° ・ ❀══════╗
 ► 𓍢ִ໋💜⊹ _${usedPrefix}add *num>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}kick *<@tag>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}kick2 *<@tag>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}listanum *<txt>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}kicknum *<txt>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}grupo *<abrir / cerrar>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}grouptime *<opcion> <tiempo>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}promote *<@tag>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}demote *<@tag>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}infogroup_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}resetlink_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}link_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}setname *<txt>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}setdesc *<txt>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}invocar *<txt>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}setwelcome *<txt>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}setbye *<txt>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}hidetag *<txt>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}hidetag *<audio>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}hidetag *<video>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}hidetag *<img>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}warn *<@tag>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}unwarn *<@tag>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}listwarn_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}fantasmas_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}setpp *<img>*_
 ► 𓍢ִ໋💜⊹ _admins *<txt>*_ (sin prefijo)
${readMore}
╚══════❀ ・ ° ・ ❀══ ════╝

 *« CONVERTIDORES »* 

╔══════❀ ・ ° ・ ❀══════╗
 ► 𓍢ִ໋💜⊹ _${usedPrefix}toanime *<img>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}togifaud *<video>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}toimg *<sticker>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}tomp3 *<video>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}tomp3 *<nota de voz>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}toptt *<video / audio>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}tovideo *<sticker>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}tourl *<video / img / audio>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}tts *<idioma> <txt>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}tts *<efecto> <txt>*_
╚══════❀ ・ ° ・ ❀══ ════╝

 *« EFECTOS & LOGOS »* 

╔══════❀ ・ ° ・ ❀══════╗
 ► 𓍢ִ໋💜⊹ _${usedPrefix}logos *<efecto> <txt>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}logochristmas *<txt>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}logocorazon *<txt>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}ytcomment *<txt>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}hornycard *<@tag>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}simpcard *<@tag>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}lolice *<@tag>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}itssostupid_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}pixelar_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}blur_
╚══════❀ ・ ° ・ ❀══ ════╝

 *« FRASES & TEXTOS »* 

╔══════❀ ・ ° ・ ❀══════╗
 ► 𓍢ִ໋💜⊹ _${usedPrefix}piropo_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}consejo_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}fraseromantica_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}historiaromantica_
╚══════❀ ・ ° ・ ❀══ ════╝

 *« RANDOM »* 
 
╔══════❀ ・ ° ・ ❀══════╗
 ► 𓍢ִ໋💜⊹ _${usedPrefix}kpop *<blackpink/exo/bts>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}cristianoronaldo_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}messi_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}cat_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}dog_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}meme_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}itzy_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}blackpink_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}navidad_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}wpmontaña_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}pubg_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}wpgaming_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}wpaesthetic_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}wpaesthetic2_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}wprandom_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}wallhp_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}wpvehiculo_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}wpmoto_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}coffee_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}pentol_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}caricatura_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}ciberespacio_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}technology_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}doraemon_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}hacker_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}planeta_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}randomprofile_
╚══════❀ ・ ° ・ ❀══ ════╝

 *« EFECTOS AUDITIVOS »* 

╔══════❀ ・ ° ・ ❀══════╗
 ► 𓍢ִ໋💜⊹ _${usedPrefix}bass_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}blown_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}deep_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}earrape_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}fast_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}fat_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}nightcore_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}reverse_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}robot_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}slow_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}smooth_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}tupai_
╚══════❀ ・ ° ・ ❀══ ════╝

 *« CHAT ANÓNIMO »*
 
╔══════❀ ・ ° ・ ❀══════╗
 ► 𓍢ִ໋💜⊹ _${usedPrefix}start_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}next_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}leave_
╚══════❀ ・ ° ・ ❀══ ════╝

 *« HERRAMIENTAS »*
 
╔══════❀ ・ ° ・ ❀══════╗
 ► 𓍢ִ໋💜⊹ _${usedPrefix}inspect *<wagc_url>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}chatgpt *<txt>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}delchatgpt
 ► 𓍢ִ໋💜⊹ _${usedPrefix}gptvoz *<txt>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}dall-e *<txt>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}spamwa *num|txt|cant>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}tamaño *<cant> <img / video>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}readviewonce *<img / video>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}clima *<país> <ciudad>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}encuesta *<txt1|txt2>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}afk *<motivo>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}ocr *<responde a img>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}hd *<responde a img>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}acortar *<url>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}calc *<operacion>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}del *<msj>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}whatmusic *<audio>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}readqr *<img>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}qrcode *<txt>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}readmore *<txt1|txt2>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}styletext *<txt>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}traducir *<txt>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}nowa *num>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}covid *<pais>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}horario_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}dropmail_
${readMore}
╚══════❀ ・ ° ・ ❀══ ════╝
 
 *« ECONOMÍA »* 
 
╔══════❀ ・ ° ・ ❀══════╗
 ► 𓍢ִ໋💜⊹ _${usedPrefix}adventure_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}cazar_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}cofre_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}balance_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}claim_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}heal_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}lb_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}levelup_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}myns_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}perfil_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}work_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}minar_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}minar2_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}buy_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}buyall_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}verificar_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}robar *<cant> <@tag>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}transfer *<tipo> <cant> <@tag>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}unreg *<sn>*_
╚══════❀ ・ ° ・ ❀══ ════╝

 *« STICKERS »* 

╔══════❀ ・ ° ・ ❀══════╗
 ► 𓍢ִ໋💜⊹ _${usedPrefix}sticker *<responder a img o video>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}sticker *<url>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}sticker2 *<responder a img o video>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}sticker2 *<url>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}s *<responder a img o video>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}s *<url>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}scircle *<img>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}sremovebg *<img>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}semoji *<tipo> <emoji>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}qc *<txt>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}attp *<txt>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}attp2 *<txt>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}attp3 *<txt>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}ttp *<txt>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}ttp2 *<txt>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}ttp3 *<txt>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}ttp4 *<txt>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}ttp5 *<txt>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}pat *<@tag>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}slap *<@tag>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}kiss *<@tag>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}dado_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}wm *<packname> <autor>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}stickermarker *<efecto> <img>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}stickerfilter *<efecto> <img>*_
${readMore}
╚══════❀ ・ ° ・ ❀══ ════╝

 *« PROPIETARIO »* 

╔══════❀ ・ ° ・ ❀══════╗
 ► 𓍢ִ໋💜⊹ _${usedPrefix}dsowner_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}setprefix *<prefijo>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}resetprefix_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}autoadmin_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}grouplist_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}chetar_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}leavegc_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}cajafuerte_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}blocklist_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}addowner *<@tag / num>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}delowner *<@tag / num>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}block *<@tag / num>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}unblock *<@tag / num>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}enable *restrict*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}disable *restrict*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}enable *autoread*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}disable *autoread*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}enable *public*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}disable *public*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}enable *pconly*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}disable *pconly*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}enable *gconly*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}disable *gconly*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}enable *anticall*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}disable *anticall*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}enable *antiprivado*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}disable *antiprivado*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}enable *modejadibot*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}disable *modejadibot*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}enable *audios_bot*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}disable *audios_bot*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}enable *antispam*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}disable *antispam*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}msg *<txt>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}banchat_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}unbanchat_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}resetuser *<@tag>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}banuser *<@tag>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}unbanuser *<@tag>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}dardiamantes *<@tag> <cant>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}añadirxp *<@tag> <cant>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}banuser *<@tag>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}bc *<txt>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}bcchats *<txt>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}bcgc *<txt>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}bcgc2 *<audio>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}bcgc2 *<video>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}bcgc2 *<img>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}bcbot *<txt>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}cleartpm_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}restart_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}AlacranUp_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}banlist_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}addprem *<@tag> <tiempo>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}addprem2 *<@tag> <tiempo>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}addprem3 *<@tag> <tiempo>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}addprem4 *<@tag> <tiempo>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}delprem *<@tag>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}listcmd_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}setppbot *<responder a img>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}addcmd *<txt> <responder a sticker/img>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}delcmd *<responder a sticker/img con comando o txt asignado>*_
 ► 𓍢ִ໋💜⊹ _${usedPrefix}saveimage
 ► 𓍢ִ໋💜⊹ _${usedPrefix}viewimage
╚══════❀ ・ ° ・ ❀══ ════╝`.trim();
  if (m.isGroup) {
   // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
   const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
   conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
  } else {
   // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
   const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
   conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
  }
 } catch {
  conn.reply(m.chat, '*[ ℹ️ ] Este menu tiene un error interno, por lo cual no fue posible enviarlo.*', m);
 }
};
handler.command = /^(menu)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
 const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
 const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
 const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
 return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
