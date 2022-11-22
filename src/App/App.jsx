import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/Layout';
import { Home } from 'pages/Home';
import { NotFound } from 'pages/NotFound';

const Movies = lazy(() =>
  import('../pages/Movies').then(module => ({
    ...module,
    default: module.Movies,
  }))
);

const MovieDetails = lazy(() =>
  import('../pages/MovieDetails').then(module => ({
    ...module,
    default: module.MovieDetails,
  }))
);

const Cast = lazy(() =>
  import('../pages/Cast').then(module => ({
    ...module,
    default: module.Cast,
  }))
);

const Reviews = lazy(() =>
  import('../pages/Reviews').then(module => ({
    ...module,
    default: module.Reviews,
  }))
);

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

// path = 'home';
