const MoviesPage = () => {
  return (
    <main>
      <h2>Movie search</h2>
      <form>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit">Go on</button>
      </form>
    </main>
  );
};

export default MoviesPage;
