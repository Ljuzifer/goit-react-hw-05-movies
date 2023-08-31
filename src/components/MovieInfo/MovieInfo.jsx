import { fetchMovieInfo } from 'services/api';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const MovieInfo = () => {
  const [info, setInfo] = useState({});
  const { movieId } = useParams();
  const route = `/movie/${movieId}`;

  useEffect(() => {
    async function fetchThisMovie() {
      try {
        const movieDetails = await fetchMovieInfo(route);
        setInfo(movieDetails);
      } catch (error) {
        console.log(error);
      }
    }
    fetchThisMovie();
  }, [route]);

  const {
    title,
    original_title,
    poster_path,
    budget,
    genres,
    homepage,
    release_date,
    vote_average,
    overview,
  } = info;
  const poster = poster_path
    ? `http://image.tmdb.org/t/p/w342${poster_path}`
    : null;
  const release = release_date ? release_date.slice(0, 4) : null;
  const rating = vote_average ? Math.round(vote_average * 10) : null;
  const tags = genres
    ? genres.map(tag => (
        <li key={tag.id} style={{ marginRight: '44px' }}>
          <p>{tag.name}</p>
        </li>
      ))
    : null;

  return (
    <main>
      <hr />
      <Link to={'/'}>Go back home</Link>
      <section style={{ display: 'flex' }}>
        <img src={poster} alt={original_title} />
        <div>
          <h2>
            {title} ({release})
          </h2>
          <p>
            The budget($): <b>{budget}</b>
          </p>
          <p>
            User Score: <b>{rating}%</b>
          </p>
          <h3>Overview</h3>
          <p>{overview} </p>
          <h4>Genres</h4>
          <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
            {tags}
          </ul>
          <p>Homepage: </p>
          <a href={homepage} target="_blank" rel="noreferrer">
            {homepage}
          </a>
        </div>
      </section>
      <hr />
      <section>
        <h5>Additional information</h5>
      </section>
    </main>
  );
};

export default MovieInfo;
