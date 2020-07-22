const Discord = require('discord.js');

module.exports = {
  name: 'leaderboard',
  description: 'leaderboard!',
  usage: '!leaderboard - get the most active users',
  execute(message) {
    const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Leaderboard')
      .setDescription('Most active users')
      .addFields(
        { name: 'User1', value: 'LVL5' },
        { name: '\u200B', value: '\u200B' },
        { name: 'User2', value: 'LVL2' },
        { name: '\u200B', value: '\u200B' },
        { name: 'User3', value: 'LVL1' },
        { name: '\u200B', value: '\u200B' }
      )
      .setTimestamp();

    return message.channel.send(exampleEmbed);
  },
};
