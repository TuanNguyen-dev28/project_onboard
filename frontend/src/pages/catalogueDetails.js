import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getTrophyById } from "../service_API/trophiesAPI";

export default function TrophyDetail() {
  const { id } = useParams();

  const [trophy, setTrophy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;

    async function loadDetail() {
      setLoading(true);
      setError("");

      try {
        const result = await getTrophyById(id);

        if (!ignore) {
          setTrophy(result);
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

    loadDetail();

    return () => {
      ignore = true;
    };
  }, [id]);

  return (
    <main className="catalogue">
      <Link to="/catalogue">← Quay lại Catalogue</Link>

      {loading && <p>Đang tải chi tiết...</p>}

      {!loading && error && <p role="alert">{error}</p>}

      {!loading && !error && trophy && (
        <article className="trophy-detail">
          <h1>{trophy.name}</h1>

          <p>
            Phân loại: {trophy.category === "europe" ? "Châu Âu" : "Trong nước"}
          </p>

          <p>Số lần vô địch: {trophy.quantity}</p>

          <h2>Các năm vô địch</h2>

          <ul>
            {trophy.wins.map((win) => (
              <li key={win.year}>
                <strong>{win.year}</strong> — {win.coach}
              </li>
            ))}
          </ul>
        </article>
      )}
    </main>
  );
}
