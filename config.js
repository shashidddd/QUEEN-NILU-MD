/*
WHATSAPP BOT BY Janith sadanuwan 
WHATSAPP - 94767438882
SUPPORT GROUP - https://t.me/QueenNilu
YOUTUBE - http://youtube.com/janithsadanuwan
*/

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

// PUT YOUR SESSION ID HERE  ##Required 

global.SESSION_ID = 'QueenNilu;;;ZuZXQajK#4Uk5Mod7C8dVBq305FIq4XfuWdOeVTyN6ex0kaUZR70' // PUT your session ID BY scan QR 

// databse URL  ##Required 
global.POSTGRESQL_URL = 'postgres://shashibot_user:zgM0nAMJzwEP0QSrr2BYHXh9jZ3oth5i@dpg-ckg56kr6fquc739aqtr0-a.frankfurt-postgres.render.com/shashibot'



// ⚙️ OWNER SETTINGS  ⚙️

global.OWNER_NUMBER = '94741619883'

global.OWNER_NAME = 'ᴅᴜʟɴᴀᴋᴀ'

global.TIMEZONE = 'Asia/Colombo' 

global.INBOX_BLOCK_MESSAGE = '' // Inboc Block Message

global.INBOX_BLOCK = 'false' // TO Inbox Block On put true

global.READ_MESSAGE = "true" 

global.OPENAI_API_KEY = "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" 

/*
⚙️ BOT  SETTINGS  ⚙️
*/

global.BOT_NAME = 'ǫᴜᴇᴇɴ ꜱʜᴀꜱʜɪ'
 
global.BOT_OFFLINE = false    //  Always Onlne -  | false offline -True

global.STICKER_NAME = '@shashi bot 🤹‍♂️' //sticker

global.FOOTER = 'Queen Shashi 2023 '

global.LANG = 'EN' // Language (EN-  TO english  ,  SI- TO sinhala )

global.PREFIX = '.' // Bot Prefix

global.CAPTION = 'ǫᴜᴇᴇɴ ꜱʜᴀꜱʜɪ  © 2023' // Caption

global.ALIVELOGO = 'https://telegra.ph/file/1e63f0ee90304a12767c7.jpg' // Set Alive Logo link 

global.ALIVE_MESSAGE = '🎲💖🅆🄴🄻🄲🄾🄼🄴🎲💖

✶━━┉┉┉┉┉━╾╾━┉┉┉┉┉━━✶🧚‍♀️ʙᴏᴛ ɴᴀᴍᴇ -: queen shasi
✶━━┉┉┉┉┉━╾╾━┉┉┉┉┉━━✶
🧚‍♀️ᴏᴡɴᴇʀ -: ᴅᴜʟᴀ (×_×)
✶━━┉┉┉┉┉━╾╾━┉┉┉┉┉━━✶
🧸𝘾𝞗𝞛𝞛𝞓𝞜𝘿𝙎🧸
✶━━┉┉┉┉┉━╾╾━┉┉┉┉┉━━✶
┏┉┉┉┉┉┉┉┉━┉┉┉┉┉┉┉┉⃥⚙️______(.menu)_____

....ɴɪᴋᴇ ɴᴀᴍᴇ...:- ᴄʜᴜᴛɪ ᴛᴇᴅɪʏᴀ🧸💖
┖┈─┈──┈─◈❁◈─┈─┈─' // Set Alive Message

global.MAX_SIZE = '400' // Bot Uloading Max size 

global.ANTI_BAD = 'true' // Antibad (on = True , Off = False )

global.ANTI_BAD_ACTION = false

global.ANTI_LINK = 'false' //Anti Link (on = True , Off = False )

global.ANTI_BOTS = true

global.ONLY_GROUP = 'false' // Only group mode

global.GROUP_LINK = 'https://chat.whatsapp.com/IRdyJY5P4sF5BhtP5PIdHH' // ur group link


/* 18 + Download Settings */

global.SEX_DL = 'false' // 18 + video dl

/* AUTO REPLY SETTINGS */

global.AUTO_STICKER = true

global.AUTO_REPLY = true

global.VOICE_REPLY = true


/* V card */

global.ytname = "YT: janithsadanuwan" //ur yt chanel name
global.socialm = "GitHub: janithsadanuwan" //ur github or insta name
global.location = "Srilanka, colombo" //ur location

