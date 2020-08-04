const db = require('quick.db');

module.exports = () => {
  return {
    create(content) {
      return db.set('stats', content);
    },
    findByIdAndUpdate(id, content) {
      return db.set(`stats.${id}`, content);
    },
    deleteById(id) {
      return db.delete('stats', id);
    },
    findById(id) {
      const result = db.get('stats', id);
      if (!result) return null;

      return result[id];
    },
  };
};
