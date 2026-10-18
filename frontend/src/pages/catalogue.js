import { useEffect, useState } from "react";
import { getTrophies } from "../service_API/trophiesAPI";
const trophyImages = {
  1: "/img/CUPC1.jpg",
  2: "/img/europa.jpg",
  3: "/img/PLcup.jpg",
};

function Catalogue() {
  const [trophies, setTrophies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTrophies = async () => {
      try {
        const response = await getTrophies();
        setTrophies(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrophies();
  }, []);

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

              <details className="trophy-details">
                <summary>Xem chi tiết</summary>

                <ul>
                  {item.wins.map((win) => (
                    <li key={win.year}>
                      <strong>{win.year}</strong> — {win.coach}
                    </li>
                  ))}
                </ul>
              </details>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Catalogue;
