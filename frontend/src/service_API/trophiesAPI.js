const API_URL = "http://localhost:5000/api";

export async function getTrophies(category = "all") {
  const param = new URLSearchParams({ category });
  const response = await fetch(`${API_URL}/trophies?${param.toString()}`);

  if (!response.ok) {
    throw new Error("Failed to fetch trophies");
  }

  const trophies = await response.json();
  return trophies;
}

export async function getTrophyById(id) {
  const response = await fetch(`${API_URL}/trophies/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch trophy");
  }

  return response.json();
}
