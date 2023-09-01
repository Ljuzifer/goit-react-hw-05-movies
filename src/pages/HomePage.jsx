import SearchMoviesList from 'components/SearchMoviesList/SearchMoviesList';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { fetchMovieInfo } from 'services/api';

const HomePage = () => {
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
        toast.success('So, what trending this week...?');
      }
    }, 800);
  }, []);

  return (
    <main>
      <h2>Trending this week...</h2>

      <ul>
        <SearchMoviesList movies={movies} />
      </ul>
    </main>
  );
};

export default HomePage;
