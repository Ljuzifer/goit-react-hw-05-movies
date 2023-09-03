import { toast } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import SearchMoviesList from 'components/SearchMoviesList/SearchMoviesList';
import { fetchMovieInfo } from 'services/api';
import {
  HomeTitle,
  MainList,
} from 'components/SharedLayout/SharedLayout.styled';

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
      <HomeTitle>Trending this week...</HomeTitle>

      <MainList>
        <SearchMoviesList movies={movies} />
      </MainList>
    </main>
  );
};

export default HomePage;
