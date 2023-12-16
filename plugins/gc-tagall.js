const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `*𝐃𝐞𝐬𝐞𝐚𝐬 𝐂𝐨𝐦𝐩𝐫𝐚𝐫 𝐄𝐥 𝐁𝐨𝐭 ? Wa.me/51906528530  𓍢ִ໋💜⊹* ${pesan}`;
  let teks = `*𝗩𝗶𝗼𝗹𝗲𝘁 𝗕𝗼𝘁 𝐃𝐢𝐜𝐞 𝐐𝐮𝐞 𝐓𝐞 𝐀𝐜𝐭𝐢𝐯𝐞𝐬 𝐏𝐥𝐚𝐧𝐭𝐢𝐭𝐚 🌱*\n\n${oi}\n\n`;
  for (const mem of participants) {
    teks += ` 𓍢ִ໋💜⊹┣➥ @${mem.id.split('@')[0]}\n`;
  }
  teks += `\n 𓍢ִ໋💜⊹ 𝗩𝗜𝗢𝗟𝗘𝗧 𝗕𝗢𝗧  𓍢ִ໋💜⊹`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;
