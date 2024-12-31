/*╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
    ⭐𝐏𝐑𝐎𝐉𝐄𝐂𝐓 𝐍𝐀𝐌𝐄:
    𝐆𝐀𝐌𝐄𝐑-𝐕1 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓 𝐌𝐃
    
    ⭐𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐑
     𝐃𝐀𝐑𝐊 𝐆𝐀𝐌𝐄𝐑 
     
    ⭐ ＭＹ ＴＥＡＭ
     𝐒𝐒𝐏 𝐂𝐎𝐌𝐏𝐀𝐆𝐍𝐈𝐄
     
    ⭐ ＯＵＲ ＷＥＢＳＩＴＥ
     https://github.com/lamperouge224/JINHUYK-MD-V2

© ＴＲＹ ＤＥＣＲＹＰＴＩＮＧ ＩＦ ＹＯＵ ＣＡＮ⚠

╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺*/


const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

//--------------------------𝐝𝐚𝐫𝐤 𝐠𝐚𝐦𝐞𝐫---------------------------------------
module.exports = {

SESSION_ID: process.env.SESSION_ID || "iIAXHSpZ#pysUcO4HWfWHcuER-obfASAYSdVJdoxD59-3cuFseAI",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true", //TRUE OR FALSE
OWNER_NUMBER: process.env.OWNER_NUMBER || "221778271315",
MODE: process.env.MODE || "public",  // PRIVATE OR PUBLIC
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.postimg.cc/cLL0MWyT/JINHUYK-MD-V2.jpg", // DO NOT CHANGE
ALIVE_MSG: process.env.ALIVE_MSG || "𝙹𝙸𝙽𝙷𝚄𝚈𝙺 ᴀɪ ɪs ᴀʟɪᴠᴇ. ᴋᴇᴇᴘ sᴜᴘᴘᴏʀᴛɪɴɢ *𝚂𝙰𝚂𝙰𝙺𝙸-𝙲𝙾𝙼𝙿𝙰𝙶𝙽𝙸𝙴🍂*\n\n> ᴅᴇᴠᴇʟᴏᴘᴇᴅ ʙʏ 𝙺𝙰𝙽𝙶 𝙹𝙸𝙽𝙷𝚄𝚈𝙺",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX || "!", // .,!/?
FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
AUTO_REACT: process.env.AUTO_REACT || "false",
HEART_REACT: process.env.HEART_REACT || "false",
OWNER_REACT: process.env.OWNER_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "『 𝐆𝐀𝐌𝐄𝐑-𝐌𝐃-𝐕2 』",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};

//--------------MADE BY KANG JINHUYK 2024 DEC---------------->-
