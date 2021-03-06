const StatController = require('../controllers/StatController');

const setLevel = (user, level) => {
  return `${user.username} new level: ${level}`;
};

const getLevel = (user) => {
  const level = StatController.getUserLevel(user.id);
  return `${user} current level: ${level}`;
};

module.exports = {
  name: 'level',
  description: 'leve!',
  usage: '!level - get your level\n!level <user> <level> - set user level',
  execute(message, args) {
    if (args.length > 0) {
      if (args.length === 2) {
        return message.channel.send(setLevel(message.mentions.users.first(), args[1]));
      }
      return message.channel.send(this.usage);
    }
    return message.channel.send(getLevel(message.author));
  },
};
