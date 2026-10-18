import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTrophies } from "../service_API/trophiesAPI";
const trophyImages = {
  1: "/img/CUPC1.jpg",
  2: "/img/europa.jpg",
  3: "/img/PLcup.jpg",
};
const categories = [
  { value: "all", label: "Tất cả" },
  { value: "domestic", label: "Trong nước" },
  { value: "europe", label: "Châu Âu" },
];

function Catalogue() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [trophies, setTrophies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;

    async function loadTrophies() {
      setLoading(true);
      setError("");

      try {
        const result = await getTrophies(selectedCategory);

        if (!ignore) {
          setTrophies(result);
        }
      } catch (error) {
        if (!ignore) {
          setError(error.message);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    loadTrophies();

    return () => {
      ignore = true;
    };
  }, [selectedCategory]);

  if (loading) {
    return <p>Đang tải danh hiệu...</p>;
  }

  if (error) {
    return <p role="alert">{error}</p>;
  }
  return (
    <main className="catalogue">
      <header className="catalogue-heading">
        <h1>Bộ sưu tập danh hiệu</h1>
        <p>Những dấu mốc làm nên lịch sử Manchester United</p>
      </header>

      <div
        className="catalogue-filters"
        role="group"
        aria-label="Phân loại danh hiệu"
      >
        {categories.map((category) => (
          <button
            key={category.value}
            type="button"
            className={
              selectedCategory === category.value
                ? "filter-button active"
                : "filter-button"
            }
            aria-pressed={selectedCategory === category.value}
            onClick={() => setSelectedCategory(category.value)}
          >
            {category.label}
          </button>
        ))}
      </div>

      {trophies.length === 0 && <p>Chưa có danh hiệu thuộc phân loại này.</p>}

      <div className="trophy-list">
        {trophies.map((item) => (
          <article key={item.id} className="trophy-card">
            <div className="trophy-image">
              <img src={trophyImages[item.id]} alt={item.name} />
            </div>

            <div className="trophy-content">
              <h2>{item.name}</h2>

              <p className="trophy-count">
                <strong>{item.quantity}</strong>
                <span>lần vô địch</span>
              </p>

              {item.wins.length > 0 && (
                <p className="trophy-latest">
                  Gần nhất: {Math.max(...item.wins.map((win) => win.year))}
                </p>
              )}

              <Link to={`/catalogue/${item.id}`} className="detail-link">
                Xem chi tiết →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Catalogue;
