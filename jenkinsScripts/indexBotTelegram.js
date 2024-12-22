const TelegramBot = require('node-telegram-bot-api');
// const chatId = process.env.CHAT_ID;
// const botToken = process.env.BOT_TOKEN;
const chatId = process.argv[3];
const botToken = "7763082320:AAEIry2h0ZdzaSNGHQMAOAh-pc_jHYtPWTk";
const msg = process.argv[2];
const bot = new TelegramBot(botToken, {polling: true});

console.log(chatId + botToken + msg);

bot.sendMessage(chatId, msg)
  .then(() => {
    console.log('Message sent');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Error:', error);
    process.exit(1);
  });