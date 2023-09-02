import { toast } from 'react-hot-toast';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieInfo } from 'services/api';
import SearchMoviesList from 'components/SearchMoviesList/SearchMoviesList';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useSearchParams();
  const currentSearch = searchQuery.get('search') ?? '';

  const onChangeSearch = e => {
    e.preventDefault();
    const newSearch = e.target.elements.search.value;

    if (newSearch === '') {
      toast.error('You must enter some text...');
      return;
    }
    setSearchQuery({ search: newSearch });
  };

  useEffect(() => {
    if (currentSearch === '') {
      return;
    }

    toast.loading('Wait a minute...', { duration: 700 });
    const some = `&query=${currentSearch}`;
    const route = '/search/movie';

    setTimeout(async () => {
      try {
        const { results, total_results } = await fetchMovieInfo(route, some);
        toast.success(`Yeah! We've found ${total_results} movies!`);
        setMovies([...results]);
      } catch (error) {
        console.warn(error);
        toast.error('Oops! Something went wrong...');
      }
    }, 800);
  }, [currentSearch]);

  return (
    <main>
      {currentSearch === '' && <h2>Ok! Let's find some movie...</h2>}
      <form onSubmit={onChangeSearch}>
        <input
          type="text"
          name="search"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit">Go on</button>
      </form>
      <hr />
      {movies !== [] && (
        <section>
          <ul>
            <SearchMoviesList movies={movies} />
          </ul>
        </section>
      )}
    </main>
  );
};

export default MoviesPage;
