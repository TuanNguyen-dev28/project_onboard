import trophies from "../data/trophies.json" with { type: "json" };

function getAllTrophies(category = "all") {
  const result =
    category === "all"
      ? trophies
      : trophies.filter((trophy) => trophy.category === category);

  return result.map((trophy) => ({ ...trophy }));
}

function findTrophiesById(id) {
  const trophy = trophies.find((trophy) => trophy.id === Number(id));
  return trophy ? { ...trophy } : null;
}

export { getAllTrophies, findTrophiesById };
