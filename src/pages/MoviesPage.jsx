import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieInfo } from 'services/api';

const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useSearchParams();
  const currentSearch = searchQuery.get('search') ?? '';
  console.log(currentSearch);

  const onChangeSearch = e => {
    e.preventDefault();
    const newSearch = e.target.elements.search.value;

    if (newSearch === '') {
      toast.error('You must enter some text...');
      return;
    }
    setSearchQuery({ search: newSearch });
    e.target.elements.search.value = '';
  };

  useEffect(() => {
    if (currentSearch === '') {
      return;
    }
    // /search/movie?query=hitm
    const some = `&query=${currentSearch}`;
    const route = '/search/movie';

    setTimeout(async () => {
      try {
        const { results, total_results } = await fetchMovieInfo(route, some);
        console.log(total_results);
      } catch (error) {
        toast.error('Oops!');
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
          // value={currentSearch}
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          // onChange={e => e.target.value}
        />
        <button type="submit">Go on</button>
      </form>
      <hr />
      <section>
        <ul></ul>
      </section>
    </main>
  );
};

export default MoviesPage;
