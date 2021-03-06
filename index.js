/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
require('dotenv').config();

const fs = require('fs');
const Discord = require('discord.js');
const { prefix } = require('./config.json');
const statController = require('./controllers/StatController');

const { TOKEN } = process.env;

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter((file) => file.endsWith('.js'));

commandFiles.forEach((file) => {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
});

client.once('ready', () => {
  console.log('Ready!');
});

client.on('message', (message) => {
  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) {
    return statController.checkMessage(message);
  }

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (!client.commands.has(command)) return;

  try {
    client.commands.get(command).execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply('there was an error trying to execute that command!');
  }
});

client.login(TOKEN);
