//#ENJOY
/**

░▒▓██████████████▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░▒▓█▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░▒▓███████▓▒░░▒▓██████▓▒░  ░▒▓██████▓▒░  
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░         ░▒▓█▓▒░     
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░         ░▒▓█▓▒░     
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░  ░▒▓█▓▒░     
                                                                   
                                                                   
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "johnleo.smith.666@gmail.com";
global.location = "Anambra, Nigeria.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "2348168855791@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Nigeria";
global.github = process.env.GITHUB || "https://github.com/johnleosmith/Mikey-Md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaZsyQ21XqudOTjyG30Z";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaZsyQ21XqudOTjyG30Z";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/2aff6169c666b62b77951.jpg";
global.devs = "2348027387246";
global.sudo = process.env.SUDO || "2348168855791";
global.owner = process.env.OWNER_NUMBER || "2348168855791";
global.style = process.env.STYLE || "3";2348168855791
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUURMNjc1WGJVdGxzMWxtNVEwN1krYXR2QjRBU1FLQjh1cEhaV1FKTGlYST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieEg4aXdQOElMcStDcEEwdkdRV2daLzJ5M0RyNFpjenVTeVJOVENnL1NtYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxSjZqV1RKZmVUVnRiZkVobzFyOG9QRDh5WkxGVUtYNmp2SXhxenJyMEhZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMZEdBR01JaUcrZ2g4b2I2ajdZQkF0MHF0VnYwaFRhVU5nZFNmTHE4emp3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtDVGdzV3lYTnkvS3RQdHdWWWxvWWhxaE05aTRxcllmSmpQZFVodHpQSEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdHelZxQ2loVEFvc1FlRFNYZENOVitQdHd4T3NiaFNSeUhRcEtlbE15Vms9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUNPY2J1WDN0OC9tZ1k4VXhBUzNQVjI0UzZJc2RjK0VHVmVZNmJMejRGbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUkFyeHVGdjFLcjR1YnUwUENBNDZrRkxCN3ZQSG1mYWFhNGhYWHRMWjBXRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBZUEZPbndoTE1nN2FmeXdFU3F2YnZoWUR2QUJ0T3UxbGs4MStDVVBRRUN6MkJBVGpoY1lwUzMxRHV6RXhyVzJGRUNSQlZZWjJvOVhPOTRxaVUyd2dBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzAsImFkdlNlY3JldEtleSI6ImpCNFdlbmRBNlFKQVZDZU5rZ0JRVzZGVkJqa0tSeDdCQm41RVlmVGlRcTQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Im10V1M4YTRMVHZDN0hucGJqZG4teWciLCJwaG9uZUlkIjoiMTM4MWEzMjUtYmRhNS00NzY0LWEwMGQtNjhjZDMzMGMwYjI3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVieTJSTVJFMk93THpSL2JrUjZYYjZ6K3JWMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEK0hmc0xFREM5RFdyb2RQWUxPY1YyTnpoOXM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiM1pMOFhXTEYiLCJtZSI6eyJpZCI6IjIzNDgxNjg4NTU3OTE6NzJAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BuV3RyZ0NFSkxkazdZR0dCRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InBXUXhDUGJ3c2RyRXY5UUhWTlltRXBHeHk5WXlFZit6TDYxbkF5QkhheGc9IiwiYWNjb3VudFNpZ25hdHVyZSI6InB2SVlRMVY0R2ZBMUJCU1pMb2E0TUxHN2Z6M1NwbGxORFNibktCSThUbUNnamNWK0FYS1NlbW1EbkkwZU90ZVBjeldMSHhsS3FELzVJazhxSGMxNUF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ2anRtaGxIY0E2YzNEVWdlMzRNTS94S200Y2xLK3hVaTN6a05HUXYwSWRiNHJNVXBlUFI4S1NrR2NFOFVwUVdXRk5ORkVqTGxJL2FrLy81QnQxK0FoQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxNjg4NTU3OTE6NzJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYVZrTVFqMjhMSGF4TC9VQjFUV0poS1JzY3ZXTWhIL3N5K3Rad01nUjJzWSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNDE4MjE3OCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPUjgifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐌𝐢𝐤𝐞𝐲-𝐌𝐝😍",
  author: process.env.PACK_AUTHER || "JOHNLEO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐌𝐢𝐤𝐞𝐲-𝐌𝐝",
  ownername: process.env.OWNER_NAME || "JOHNLEO",
  errorChat: process.env.ERROR_CHAT || "2348168855791",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "JOHNLEO").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
