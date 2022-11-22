import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = 'e1d2d59faab8416a91a95646b10aa32e';

const searchParams = new URLSearchParams({
  api_key: API_KEY,
});

export const getTrendMovies = async () => {
  const { data } = await axios.get(`/trending/movie/day?${searchParams}`);
  return data;
};

export const getMovieByID = async movieID => {
  const { data } = await axios.get(
    `/movie/${movieID}?${searchParams}&language=en-US`
  );
  return data;
};

export const getMovieCredits = async movieID => {
  const { data } = await axios.get(
    `/movie/${movieID}/credits?${searchParams}&language=en-US`
  );
  return data;
};

export const getMovieReview = async movieID => {
  const { data } = await axios.get(
    `/movie/${movieID}/reviews?${searchParams}&language=en-US`
  );
  return data;
};

export const getMovieKeyWord = async keyWord => {
  const { data } = await axios.get(
    `/search/movie?${searchParams}&language=en-US&page=1&include_adult=false&query=${keyWord}`
  );
  return data;
};

// const api_movie =
//   'https://api.themoviedb.org/3/trending/movie/day?api_key=e1d2d59faab8416a91a95646b10aa32e';

// const api_movie_credits =
//   'https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US';

// const api_review =
//   'https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1';

// const api_key_word =
//   'https://api.themoviedb.org/3/search/keyword?api_key=<<api_key>>&page=1';

// const api_query =
//   'https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false&query=batman';

// const api_image = 'http://image.tmdb.org/t/p/w780${item.poster_path}';
//   https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=e1d2d59faab8416a91a95646b10aa32e&language=en-US
