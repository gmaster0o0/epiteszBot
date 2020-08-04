const Model = require('../models/statModel');
const config = require('../config.json');

const model = Model();

exports.checkMessage = (message) => {
  let stat = model.findById(message.author.id);
  if (!stat) {
    stat = {};
    stat[message.author.id] = { level: 0, xp: 0, lastMessage: Date.now() };
    return model.create(stat);
  }

  if (stat.lastMessage + config.spamCooldown * 1000 > Date.now()) {
    console.log('spam alert');
    return;
  }
  //TODO more complex XP system
  stat.xp += 10;
  stat.lastMessage = Date.now();
  //TODO more complex expression for next level
  const xpForNextLevel = stat.level * 20;

  if (stat.xp > xpForNextLevel) {
    stat.level += 1;
    model.findByIdAndUpdate(message.author.id, stat);

    return message.channel.send(`${message.author} elérte a ${stat.level} szintet.`);
  }

  return model.findByIdAndUpdate(message.author.id, stat);
};

exports.getUserLevel = (userId) => {
  const stat = model.findById(userId);
  return stat.level;
};
