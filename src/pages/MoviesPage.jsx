import { toast } from 'react-hot-toast';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieInfo } from 'services/api';
import SearchMoviesList from 'components/SearchMoviesList/SearchMoviesList';
import {
  HomeTitle,
  MainList,
  SearchForm,
} from 'components/SharedLayout/SharedLayout.styled';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useSearchParams();
  const currentSearch = searchQuery.get('search') ?? '';

  const onSubmitSearch = e => {
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
        const { results } = await fetchMovieInfo(route, some);
        if (results.length === 0) {
          toast('Sorry,no movies with this query');
          return;
        }
        toast.success(`Yeah! You've got ${results.length} movies!`);
        setMovies([...results]);
      } catch (error) {
        console.warn(error);
        toast.error('Oops! Something went wrong...');
      }
    }, 800);
  }, [currentSearch]);

  return (
    <main>
      {currentSearch === '' ? (
        <HomeTitle>Ok! Let's find some movie...</HomeTitle>
      ) : (
        <div style={{ height: '70px' }}></div>
      )}
      <SearchForm onSubmit={onSubmitSearch}>
        <input
          type="text"
          name="search"
          defaultValue={currentSearch}
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit">Go on</button>
      </SearchForm>
      <hr />
      {movies !== [] && (
        <section>
          <MainList>
            <SearchMoviesList movies={movies} />
          </MainList>
        </section>
      )}
    </main>
  );
};

export default MoviesPage;
