const getRankInfo = (rank) => {
  return `rank[${rank}] info`;
};

const getAllRanks = () => {
  return 'all ranks list';
};

module.exports = {
  name: 'ranks',
  description: 'ranks!',
  usage: '!ranks - get all ranks\n!ranks info <rank> - get rank info',
  execute(message, args) {
    if (args.length === 2) {
      if (args[0] === 'info') {
        return message.channel.send(getRankInfo(args[1]));
      }
    }
    if (args.length === 0) {
      return message.channel.send(getAllRanks());
    }
    return message.channel.send(this.usage);
  },
};
