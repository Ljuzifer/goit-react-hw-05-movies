import { RiArrowLeftCircleFill } from 'react-icons/ri';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchMovieInfo } from 'services/api';
import { toast } from 'react-hot-toast';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const route = `/movie/${movieId}`;
    toast.loading('Wait a minute...', { duration: 700 });

    setTimeout(async () => {
      try {
        const movieDetails = await fetchMovieInfo(route);
        setInfo(movieDetails);
      } catch (error) {
        console.warn(error);
        toast.error('Oops! Something went wrong...');
      } finally {
        toast.success('Ok! Let`s see what we have...');
      }
    }, 800);
  }, [movieId]);

  if (info === null) {
    return;
  }

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
  const poster = poster_path && `http://image.tmdb.org/t/p/w342${poster_path}`;
  const release = release_date && release_date.slice(0, 4);
  const rating = vote_average && Math.round(vote_average * 10);
  const tags =
    genres &&
    genres.map(tag => (
      <li key={tag.id} style={{ marginRight: '22px' }}>
        <p>{tag.name}</p>
      </li>
    ));

  return (
    <>
      {info && (
        <main style={{ padding: '8px' }}>
          <hr />
          <Link
            to={'/'}
            style={{
              display: 'flex',
              alignItems: 'center',
              width: 'fit-content',
              border: '1px solid',
              padding: '4px',
              marginBottom: '2px',
              textDecoration: 'none',
            }}
          >
            <RiArrowLeftCircleFill /> Go back
          </Link>
          <section style={{ display: 'flex' }}>
            <img src={poster} alt={original_title} width="280" height="420" />
            <div style={{ marginLeft: '22px' }}>
              <h2>
                {title} ({release})
              </h2>
              {budget ? (
                <p>
                  The budget($): <b>{budget}</b>
                </p>
              ) : null}
              <p>
                User Score: <b>{rating}%</b>
              </p>
              <h3>Overview</h3>
              <p>{overview} </p>
              <h4>Genres</h4>
              <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
                {tags}
              </ul>
              {homepage && (
                <div>
                  <p>Homepage: </p>
                  <a href={homepage} target="_blank" rel="noreferrer">
                    {homepage}
                  </a>
                </div>
              )}
            </div>
          </section>
          <hr />
          <section>
            <h5>Additional information</h5>
            <ul>
              <li>
                <Link to={`/movies/${movieId}/cast`}>Cast</Link>
              </li>
              <li>
                <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
              </li>
            </ul>
          </section>
          <hr />
          <Outlet />
        </main>
      )}
    </>
  );
};

export default MovieDetailsPage;
