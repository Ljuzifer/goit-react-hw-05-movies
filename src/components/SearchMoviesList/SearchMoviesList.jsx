import { Link, useLocation } from 'react-router-dom';

const SearchMoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      {movies.map(film => (
        <li key={film.id}>
          <Link to={`/movies/${film.id}`} state={{ from: location }}>
            {film.title}
          </Link>
        </li>
      ))}
    </>
  );
};

export default SearchMoviesList;
