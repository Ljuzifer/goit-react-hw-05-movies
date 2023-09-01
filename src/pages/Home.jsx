import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchMovieInfo } from 'services/api';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const route = '/trending/movie/week';

    async function fetchTrending() {
      try {
        const { results } = await fetchMovieInfo(route);
        setMovies([...results]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTrending();
  }, []);

  return (
    <main>
      <h2>Trending this week...</h2>

      <ul>
        {movies.map(film => (
          <li key={film.id}>
            <Link to={`/movies/${film.id}`}>{film.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
