module.exports = {
  name: 'help',
  description: 'help!',
  execute(message, args) {
    message.channel.send(`THIS IS THE HELP. agrs:[${args.join(',')}]`);
  },
};
