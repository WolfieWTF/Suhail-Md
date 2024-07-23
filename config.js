const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Owerri,Nigera."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nigeria";
global.github=process.env.GITHUB|| "https://github.com/WolfieWTF/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/aaa393a95443a6fbed0f0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝚆𝙾𝙻𝙵𝙸𝙴²¹¹-𝙼𝙳" 


global.devs = "2348129859507" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348129859507";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_49_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDcyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxODMsXG4gICAgICAgIDEsXG4gICAgICAgIDczLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjksXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzksXG4gICAgICAgIDUzLFxuICAgICAgICAyMTksXG4gICAgICAgIDc5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDksXG4gICAgICAgIDg5LFxuICAgICAgICAzMixcbiAgICAgICAgMjUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDUxLFxuICAgICAgICA1MSxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTgyLFxuICAgICAgICA2MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDQsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTksXG4gICAgICAgIDI3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjUsXG4gICAgICAgIDIzLFxuICAgICAgICA2MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjksXG4gICAgICAgIDY1LFxuICAgICAgICAyNDksXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDczLFxuICAgICAgICAxMzksXG4gICAgICAgIDY4LFxuICAgICAgICAwLFxuICAgICAgICAxNjksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDU4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTgwLFxuICAgICAgICA4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDU5LFxuICAgICAgICAzMixcbiAgICAgICAgMjQsXG4gICAgICAgIDExLFxuICAgICAgICAxMyxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDYsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDYwLFxuICAgICAgICAyNixcbiAgICAgICAgNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTgwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDYxLFxuICAgICAgICAyOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDMwLFxuICAgICAgICAxMixcbiAgICAgICAgMjA5LFxuICAgICAgICA3NixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjUxLFxuICAgICAgICA3NixcbiAgICAgICAgMjEsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAzNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAsXG4gICAgICAgIDMxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjIyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI1LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieW1talhyRnlaR1RQVWdOK3dDOHBmTmVVOHU2VFN4eUhZaVFHa3FLWU9HQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTI5ODU5NTA3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3Mjc0MDJBRDNBODI5RkQzNjVGN0M3MzIyRDlCMjlENFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE2OTIxNDdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVjNLR3JJelBTeFNZaHNnQ0luUE1tZ1wiLFxuICBcInBob25lSWRcIjogXCI0N2U2ODBkNi1iMTk1LTRjMDUtOTI3OC05YjU1NmEyMjk3NzhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzksXG4gICAgICAyMjcsXG4gICAgICAxMjEsXG4gICAgICAyNDgsXG4gICAgICAyOSxcbiAgICAgIDIzOSxcbiAgICAgIDE5OCxcbiAgICAgIDEyOSxcbiAgICAgIDEyNixcbiAgICAgIDE1NSxcbiAgICAgIDcsXG4gICAgICAxOTAsXG4gICAgICAyNDksXG4gICAgICAyNSxcbiAgICAgIDE4NyxcbiAgICAgIDY4LFxuICAgICAgNzcsXG4gICAgICA4NSxcbiAgICAgIDE4LFxuICAgICAgMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzQsXG4gICAgICA5NCxcbiAgICAgIDUzLFxuICAgICAgMCxcbiAgICAgIDY5LFxuICAgICAgMTQyLFxuICAgICAgMTksXG4gICAgICA0NixcbiAgICAgIDE1MCxcbiAgICAgIDEyNixcbiAgICAgIDIxOCxcbiAgICAgIDIyLFxuICAgICAgNSxcbiAgICAgIDIyNCxcbiAgICAgIDE2OSxcbiAgICAgIDEzOCxcbiAgICAgIDMyLFxuICAgICAgMjQzLFxuICAgICAgMTA5LFxuICAgICAgMTYxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlhOWVhMNzUyXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTI5ODU5NTA3OjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTAyNjcyMTkwMzQzMjE6MjRAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiV2l4VGVjaFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0x6cjFEb1E2dC83dEFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVTN1TE14MjNNdEoyNWhXaXI2am9yV21nbWxsMXRMeDg5Mks5c2xuS3NVND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJDOVFuaUVYaFVseUh5b3g4cUY1WmZTMWlPU1krNlVQcUs1UHNacGhuWUkvM1dmT0dqL1g5cUdWUlptMWhJNEs4TCt6K1NoR002THd4Nk5ja3E3NTZEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJmeVM5c3E4V2YydWZkWmlLNndCR2xiS011R0dDWHdwdk8wUjBvVmVZakljNDEzRVFsQmpBVEVtWTJ2cnFobU12a2JtbVVpY1QvdkRKamxZZW54QVBDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTI5ODU5NTA3OjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNjkyMTQyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSUtvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJS28uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJzd2NtS1laT3JYTHl4dGxNSEtpdi95dW02SzVueU9wa3VEQlgrUVFmdFNRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyMzAyNDgyOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxNjkyMTQ0MjkxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "©²⁰²⁴𝚆𝙾𝙻𝙵𝙸𝙴-𝙼𝙳" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "᭙𝓲᥊-𝓽ꫀᥴꫝ",
  packname: process.env.PACK_NAME || "𝚆𝙾𝙻𝙵𝙸𝙴-𝙼𝙳",
  botname : process.env.BOT_NAME  || "𝚆𝙾𝙻𝙵𝙸𝙴-𝙼𝙳",
  ownername:process.env.OWNER_NAME|| "WolfieWTF",


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
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















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
