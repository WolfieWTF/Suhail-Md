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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_13_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAzMixcbiAgICAgICAgODQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTIxLFxuICAgICAgICA3NixcbiAgICAgICAgMTksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzksXG4gICAgICAgIDk0LFxuICAgICAgICA2NixcbiAgICAgICAgMTM3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0LFxuICAgICAgICAxOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTUyLFxuICAgICAgICAyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjI4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDg4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODksXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICA3LFxuICAgICAgICA1MSxcbiAgICAgICAgODAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDksXG4gICAgICAgIDI2LFxuICAgICAgICAyNixcbiAgICAgICAgMjA1LFxuICAgICAgICA3MyxcbiAgICAgICAgODYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTY0LFxuICAgICAgICA5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDUyLFxuICAgICAgICAxODEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjM4LFxuICAgICAgICA1NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzIsXG4gICAgICAgIDcsXG4gICAgICAgIDE5LFxuICAgICAgICA4MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjI2LFxuICAgICAgICA3MixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDk5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTI2LFxuICAgICAgICA4MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDQ3LFxuICAgICAgICA0NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTIxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA4LFxuICAgICAgICAyNixcbiAgICAgICAgOTksXG4gICAgICAgIDIwNixcbiAgICAgICAgMjE1LFxuICAgICAgICA5NixcbiAgICAgICAgNTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5NixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMSxcbiAgICAgICAgOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDcwLFxuICAgICAgICAxNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDksXG4gICAgICAgIDIzMixcbiAgICAgICAgNzIsXG4gICAgICAgIDg0LFxuICAgICAgICA4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTgzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNixcbiAgICAgICAgOTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTQsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI4LFxuICAgICAgICAzOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDYwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDk2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI1d2ZzM0dvcjl0VXNsR0hPZko1cDlkWVZtaFB2T3I4VHA0M0hUdmM2S3FnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxMjk4NTk1MDdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjEzOUQyQUQ1OTM3NjM1RENBOEFFQkZCNTZFM0ZBNERBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTg1MjAzMlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIxSkZ4YkxTSFIyNjN1WmFQZHBsUmt3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ4MzdhZWQzLWM4MjgtNDI2ZS05ZTE0LTYzZjUyYjQwMGNmZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDUsXG4gICAgICAxMjMsXG4gICAgICAxMTksXG4gICAgICAxNzMsXG4gICAgICA2OSxcbiAgICAgIDYzLFxuICAgICAgOTgsXG4gICAgICA5NSxcbiAgICAgIDIzLFxuICAgICAgMjAxLFxuICAgICAgMTExLFxuICAgICAgNjMsXG4gICAgICAxMTMsXG4gICAgICAyMzYsXG4gICAgICAxMjMsXG4gICAgICAxMCxcbiAgICAgIDcxLFxuICAgICAgMTc5LFxuICAgICAgMjA1LFxuICAgICAgNzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDMsXG4gICAgICAxMDcsXG4gICAgICAyNCxcbiAgICAgIDIxOSxcbiAgICAgIDIwOCxcbiAgICAgIDEyOSxcbiAgICAgIDM0LFxuICAgICAgMjIwLFxuICAgICAgNjEsXG4gICAgICAxNjYsXG4gICAgICA5LFxuICAgICAgMTEsXG4gICAgICA5NCxcbiAgICAgIDU0LFxuICAgICAgMjA2LFxuICAgICAgNDgsXG4gICAgICAzNyxcbiAgICAgIDE4NSxcbiAgICAgIDE2MSxcbiAgICAgIDE5MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJXMVFFSk5OWFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEyOTg1OTUwNzoyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTkwMjY3MjE5MDM0MzIxOjI1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0wzcjFEb1E5OENGdFFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVTN1TE14MjNNdEoyNWhXaXI2am9yV21nbWxsMXRMeDg5Mks5c2xuS3NVND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ2d3dTeFVIN1lzb3lKeWd3bWRKTmVVejI4Q1VodVh0ZmszSFZSOW9kRHovZlhydzhBOWw5Q29XV0V4VjUxU2NPZ1lFWGVIRG9aVzRpeHJBZldZYmlDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJHRzlGU0wzY0ZIanR3Y3IxOE10dmpGZm9BQzRTcDZSYlJxM2FJaHNKNFZrVEdCVnZRYmFnV1AyT2s5QXRZTXc2ajJycjJtZlA2RmNQdHV5T3R6cWpodz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTI5ODU5NTA3OjI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxODUyMDI3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSUtxXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJS3EuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIzM1ZpLzRhL3hTWGNuK1dPUGIwbUhOVXFobG5EbExoRFd6bmhtU2FhcjZBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyMzAyNDgyOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxODUyMDMyNDk0XCJ9Igp9"  // PUT your SESSION_ID 


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
