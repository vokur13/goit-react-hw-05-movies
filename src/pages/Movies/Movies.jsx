import { useEffect, useState } from 'react';
import { NavLink, useSearchParams, useLocation } from 'react-router-dom';
import { Searchbar } from 'components/Searchbar';
import * as API from 'services/api';
import { List, Item } from './Movies.styled';

export const Movies = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const keyWord = searchParams.get('query') ?? '';

  function handleFormSubmit({ query }) {
    if (!query.trim().toLowerCase()) {
      return;
    }
    setSearchParams(query !== '' ? { query: query } : {});
  }

  useEffect(() => {
    if (!keyWord) {
      return;
    }
    async function fetchAssetsByKeyWord(keyWord) {
      try {
        const { results } = await API.getMovieKeyWord(keyWord);
        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAssetsByKeyWord(keyWord);
  }, [keyWord]);

  return (
    <>
      <Searchbar onFormSubmit={handleFormSubmit} />
      {movies.length > 0 && (
        <List>
          {movies.map(({ id, title }) => (
            <Item key={id}>
              <NavLink to={`${id}`} state={{ from: location }}>
                {title}
              </NavLink>
            </Item>
          ))}
        </List>
      )}
    </>
  );
};
