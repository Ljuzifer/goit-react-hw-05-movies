import { RiArrowLeftCircleFill } from 'react-icons/ri';
import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchMovieInfo } from 'services/api';
import { toast } from 'react-hot-toast';

const MovieInfo = () => {
  const { movieId } = useParams();
  const [info, setInfo] = useState(null);
  const route = useRef(`/movie/${movieId}`);
  useEffect(() => {
    // const route = `/movie/${movieId}`;
    console.log(movieId);
    toast.loading('Wait a minute...', { duration: 400 });

    setTimeout(async () => {
      try {
        const movieDetails = await fetchMovieInfo(route.current);
        console.log(movieDetails);
        setInfo(movieDetails);
      } catch (error) {
        console.warn(error);
        toast.error('Oops! Something went wrong...');
      } finally {
        toast.success('Successfully fetched!');
      }
    }, 500);
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
          <Link to={'/'}>
            <RiArrowLeftCircleFill /> Go back home
          </Link>
          <section style={{ display: 'flex' }}>
            <img src={poster} alt={original_title} />
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
      )}
    </>
  );
};

export default MovieInfo;
