import { useLocation, useParams } from 'react-router-dom';
import { NavLink, Outlet } from 'react-router-dom';
import { Box } from 'components/Box';
import { Suspense, useEffect, useState } from 'react';
import * as API from 'services/api';
import { MovieOverview } from 'components/MovieOverview';
import { NavItem } from './MovieDetails.styled';

const navItems = [
  { href: 'cast', text: 'Cast' },
  { href: 'reviews', text: 'Reviews' },
];

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  const location = useLocation();

  useEffect(() => {
    async function fetchAssetsByID(movieId) {
      try {
        const data = await API.getMovieByID(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAssetsByID(movieId);
  }, [movieId]);

  if (!movie) {
    return;
  }

  const backLink = location.state?.from ?? '/';

  return (
    <Box>
      <NavLink to={backLink}>Go back</NavLink>
      {movie && <MovieOverview movie={movie} />}
      <Box mb={3}>Additional information</Box>
      <Box as="ul" display="flex" flexDirection="column">
        {navItems.map(({ href, text }) => (
          <NavItem key={href} to={href} state={{ from: location }}>
            {text}
          </NavItem>
        ))}
      </Box>
      <Suspense fallback={<h1>Movie Details to be appeared</h1>}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
