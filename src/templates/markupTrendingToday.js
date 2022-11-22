// import { genreTitle } from './genresIntersect';
// import genres from '../json/genres.json';

export const markupTrendingToday = async results => {
  return results
    .map(
      item =>
        `<li >
            <a href="#" >
              <img
                src="http://image.tmdb.org/t/p/w780${item.poster_path}"
                loading='lazy'
                alt="Movie Poster
              />
              <div >
                <h2 >${item.title}</h2>
              </div>
            </a>
          </li>`
    )
    .join('');
};
