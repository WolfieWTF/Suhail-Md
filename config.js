const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Owerri,Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nigeria";
global.github=process.env.GITHUB|| "https://github.com/WolfieWTF/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/KCjYsehp9TT5KVRZHvZLbO";
global.website=process.env.GURL || "https://chat.whatsapp.com/KCjYsehp9TT5KVRZHvZLbO" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/e7136feb5652382653ef9.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝚆𝙾𝙻𝙵𝙸𝙴²⁰²⁴-𝙼𝙳 " 


global.devs = "2348129859507" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348129859507";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/96053700d8aede3fc3eb9.jpg" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_55_05_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDExLFxuICAgICAgICA5NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDk5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjExLFxuICAgICAgICAxODksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjMzLFxuICAgICAgICA5MCxcbiAgICAgICAgMjM4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjksXG4gICAgICAgIDk0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNSxcbiAgICAgICAgMjksXG4gICAgICAgIDUxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTksXG4gICAgICAgIDIwNixcbiAgICAgICAgMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDExLFxuICAgICAgICAxMjIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTI4LFxuICAgICAgICA3MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDU3LFxuICAgICAgICAxLFxuICAgICAgICAxMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI3LFxuICAgICAgICAxODQsXG4gICAgICAgIDMwLFxuICAgICAgICAyMCxcbiAgICAgICAgODgsXG4gICAgICAgIDExNixcbiAgICAgICAgNjgsXG4gICAgICAgIDUwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTA4LFxuICAgICAgICA0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTIxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI3LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzgsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDk1LFxuICAgICAgICA4MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODYsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDExNixcbiAgICAgICAgOTUsXG4gICAgICAgIDIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDksXG4gICAgICAgIDY5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTU5LFxuICAgICAgICAxODYsXG4gICAgICAgIDIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDg3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTA5LFxuICAgICAgICA5NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjI0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzNixcbiAgICAgICAgMTUwLFxuICAgICAgICA0NSxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTksXG4gICAgICAgIDg2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgODQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOSxcbiAgICAgICAgNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTIzLFxuICAgICAgICAzNyxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDU5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDUzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTcxLFxuICAgICAgICA4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDczLFxuICAgICAgICA3MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDc5LFxuICAgICAgICAyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDUzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDksXG4gICAgICAgIDU0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIsXG4gICAgICAgIDI5LFxuICAgICAgICAxODgsXG4gICAgICAgIDc4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDUxLFxuICAgICAgICA4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkpnNTBYdDdKa2ozMnh0NHl0TEh0ekxSTEpmY1FuSnNtYW9aYjk5VElYUDg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODA4NDY4NDI3MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMUE2MUE1MEQxM0ZEMzkxOEM3REYwODk1NEZEQzFFMENcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE1MTgzNzIzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImNLR2ptTmxiUXd1SGNOWFNpMHpMREFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTk4N2Q3OWEtNjIzMi00NzM3LWExNTYtMDE2YzZmMGZjM2M2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0MyxcbiAgICAgIDE0MCxcbiAgICAgIDE5NCxcbiAgICAgIDMyLFxuICAgICAgMTUsXG4gICAgICAxNDgsXG4gICAgICAxMTIsXG4gICAgICAxMTgsXG4gICAgICAyMzgsXG4gICAgICAxOTAsXG4gICAgICA3MSxcbiAgICAgIDIzLFxuICAgICAgOTcsXG4gICAgICAxMDUsXG4gICAgICA5NSxcbiAgICAgIDUwLFxuICAgICAgOTEsXG4gICAgICAxNDQsXG4gICAgICAxNTcsXG4gICAgICAxMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTczLFxuICAgICAgNDEsXG4gICAgICAyMTAsXG4gICAgICAyMDAsXG4gICAgICAxNzMsXG4gICAgICAxMixcbiAgICAgIDIzMSxcbiAgICAgIDExNCxcbiAgICAgIDE5OCxcbiAgICAgIDIzMixcbiAgICAgIDEwMixcbiAgICAgIDE4MyxcbiAgICAgIDIwMCxcbiAgICAgIDIyOCxcbiAgICAgIDQ3LFxuICAgICAgMTcwLFxuICAgICAgMTU3LFxuICAgICAgNzEsXG4gICAgICAxMDMsXG4gICAgICAxNzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNlJSSjJNRU1cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwODQ2ODQyNzA6MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJXb2xmaWVcIixcbiAgICBcImxpZFwiOiBcIjU1NzE0NjAxMDIxNTY2OjI5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09QQXZzRUdFT0hBN3JFR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiby9xQ3lxSXhjR2xxNE1welZlYzZoczNpRzNHQ3Z5d0hpNFhqWUQzR0cwWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJwSEtQakMvc2wxaSt3RUw0SW9seUkvcVl4bFU4c1B1WDhHRjl2MFJMdFJUVlpQRXFYbnNXa3BMNHdXTG84Rk5Namc2a2psME11VFVabGxVZnE1ajdBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJpazlQTzMzY1FBVmNHTEt0NVQ2VnFFWEhpRFNJT2tBaElkeURUR1BGcGc4d0JiZFZxMHVBOFh3V1lMVFExcjRKZG9LSm5ud2VJbkhhN1Y1RjBOcFloQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDg0Njg0MjcwOjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNTE4MzcxNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNjZ1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ2NnLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMUpwcE83ZVN4Q0lmVXRTL1g1L1dqL3ZQdzh3NDJIam5YMjRVUFZSdTNWRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzQ3OTUxNzE0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzE1MTgzNjUwNDIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "©²⁰²⁴𝚆𝙾𝙻𝙵𝙸𝙴-𝙼𝙳" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "᭙𝓲᥊-𝓽ꫀᥴꫝ",
  packname: process.env.PACK_NAME || "𝚆𝙾𝙻𝙵𝙸𝙴-𝙼𝙳",
  botname : process.env.BOT_NAME  || "𝚆𝙾𝙻𝙵𝙸𝙴-𝙼𝙳",
  ownername:process.env.OWNER_NAME|| "It'x ᭙𝓲᥊-𝓽ꫀᥴꫝ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "f8rTGmk9HBq7ddUjPerBW7Sp",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "71fd2e69fb7e057b2e4db177bf24e885";
global.aitts_Voice_Id = process.env.AITTS_ID|| "1";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
