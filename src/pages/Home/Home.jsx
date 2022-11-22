import { useState, useEffect } from 'react';
import * as API from 'services/api';
import { TrendList } from 'components/TrendList';

export const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    async function fetchAssets() {
      try {
        const { results } = await API.getTrendMovies();
        setTrendMovies(results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAssets();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <TrendList data={trendMovies} />
    </>
  );
};
