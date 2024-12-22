const TelegramBot = require('node-telegram-bot-api');
const chatId = process.env.CHAT_ID;
const botToken = process.env.BOT_TOKEN;
const bot = new TelegramBot(botToken, {polling: true});
const msg = process.argv[2];

bot.sendMessage(chatId, msg)
  .then(() => {
    console.log('Message sent');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Error:', error);
    process.exit(1);
  });