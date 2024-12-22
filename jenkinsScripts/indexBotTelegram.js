const TelegramBot = require('node-telegram-bot-api');
const msg = process.argv[2];
const chatId = process.argv[3];
const botToken = process.argv[4];
const bot = new TelegramBot(botToken, {polling: true});

// console.log(chatId + botToken + msg);

bot.sendMessage(chatId, msg)
  .then(() => {
    console.log('Message sent');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Error:', error);
    process.exit(1);
  });