const {
  getAllTrophies,
  findTrophiesById,
} = require("../services/trophiesService");

function getTrophies(req, res) {
  const category = req.query.category ?? "all";
  if (!["all", "europe", "domestic"].includes(category)) {
    return res.status(400).json({
      error: "Phân loại không hợp lệ",
    });
  }
  const trophies = getAllTrophies(category);
  res.json(trophies);
}

function getTrophiesById(req, res) {
  const id = parseInt(req.params.id);
  const trophy = findTrophiesById(id);
  if (!trophy) {
    return res.status(404).json({ error: "Trophy not found" });
  }
  res.json(trophy);
}
module.exports = {
  getTrophies,
  getTrophiesById,
};
