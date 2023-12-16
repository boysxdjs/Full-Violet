const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `🩵 𝗩𝗜𝗢𝗟𝗘𝗧 𝗕𝗢𝗧 🩵`.trim();
  const buttonMessage= {
    'document': {url: `https://www.instagram.com/only.ventas.bot/`},
    'mimetype': `application/${document}`,
    'fileName': `🩵 𝗩𝗜𝗢𝗟𝗘𝗧 𝗕𝗢𝗧 🩵`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': 'https://www.instagram.com/only.ventas.bot/',
        'mediaType': 2,
        'previewType': 'pdf',
        'title': '🩵 𝗩𝗜𝗢𝗟𝗘𝗧 𝗕𝗢𝗧 🩵',
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': 'https://www.instagram.com/only.ventas.bot/'}},
    'caption': text,
    'footer': wm,
    // 'buttons':[
    // {buttonId: `${usedPrefix}menu`, buttonText: {displayText: '𝙼𝙴𝙽𝚄'}, type: 1},
    // {buttonId: `${usedPrefix}donar`, buttonText: {displayText: '𝙳𝙾𝙽𝙰𝚁'}, type: 1}],
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.command = ['instalarbot', 'instalarbot'];
export default handler;
