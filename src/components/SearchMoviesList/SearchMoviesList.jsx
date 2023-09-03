import { useLocation } from 'react-router-dom';
import { PosterListLink } from './SearchMoviesList.styled';

const SearchMoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      {movies.map(film => (
        <li key={film.id}>
          <PosterListLink to={`/movies/${film.id}`} state={{ from: location }}>
            <img
              src={
                film.poster_path &&
                `https://image.tmdb.org/t/p/w92${film.poster_path}`
              }
              alt={film.original_title}
              width="48"
              height="72"
            />
            {film.title}
          </PosterListLink>
        </li>
      ))}
    </>
  );
};

export default SearchMoviesList;
