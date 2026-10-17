const trophies = require('../data/trophies.json');

function getAllTrophies() {
  return trophies.map(trophy => ({ ...trophy }));
}

function findTrophiesById(id) {
    const trophy = trophies.find(trophy => trophy.id === Number(id));
  return trophy ? { ...trophy } : null;
}

module.exports = {
  getAllTrophies,
  findTrophiesById,
};