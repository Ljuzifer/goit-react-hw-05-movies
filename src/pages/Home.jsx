import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { fetchMovieInfo } from 'services/api';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const route = '/trending/movie/week';
    toast.loading('Wait a minute...', { duration: 700 });

    setTimeout(async () => {
      try {
        const { results } = await fetchMovieInfo(route);
        setMovies([...results]);
      } catch (error) {
        console.log(error);
      } finally {
        toast.success('Successfully fetched!');
      }
    }, 800);
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
