import { useState, useEffect } from 'react';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import NotFoundPage from './pages/not-found';
import CoinDetailsPage from './pages/coin-details';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router';
const API_URL = import.meta.env.VITE_API_COINS_URL;

const App = () => {
  const [coins, setCoins] = useState([]);
  const [limit, setLimit] = useState(10);
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('market_cap_desc');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchCoins() {
      try {
        const res = await fetch(
          `${API_URL}&order=market_cap_desc&per_page=${limit}&page=1&sparkline=false`
        );
        if (!res.ok) throw new Error('Failed to fetch data');
        const data = await res.json();
        setCoins(data);
      } catch (err) {
        setError(err.message);
        setCoins([]);
      } finally {
        setLoading(false);
      }
    }
    fetchCoins();
  }, [limit]);

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              coins={coins}
              limit={limit}
              setLimit={setLimit}
              filter={filter}
              setFilter={setFilter}
              sort={sort}
              setSort={setSort}
              loading={loading}
              error={error}
            />
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/coin/:id" element={<CoinDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
