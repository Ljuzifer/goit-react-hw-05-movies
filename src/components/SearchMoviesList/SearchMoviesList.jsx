import { Link } from 'react-router-dom';

const SearchMoviesList = ({ movies }) => {
  return (
    <>
      {movies.map(film => (
        <li key={film.id}>
          <Link to={`/movies/${film.id}`}>{film.title}</Link>
        </li>
      ))}
    </>
  );
};

export default SearchMoviesList;
