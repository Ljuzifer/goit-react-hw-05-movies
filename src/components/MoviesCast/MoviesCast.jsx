import { toast } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieInfo } from 'services/api';

const MoviesCast = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const route = `/movie/${movieId}/credits`;
    toast.loading('Wait a minute...', { duration: 400 });

    setTimeout(async () => {
      try {
        const { cast } = await fetchMovieInfo(route);
        setDetails([...cast]);
      } catch (error) {
        console.warn(error);
        toast.error('Oops! Something went wrong...');
      } finally {
        toast.success('You`ve got it!');
      }
    }, 400);
  }, [movieId]);

  return (
    <section>
      <ul style={{ listStyle: 'none' }}>
        {details !== [] &&
          details.map(info => (
            <li key={info.credit_id}>
              <img
                src={
                  info.profile_path &&
                  `http://image.tmdb.org/t/p/w185${info.profile_path}`
                }
                alt={info.original_name}
              />
              <h3>{info.name} </h3>
              <p>
                Character: <b>{info.character} </b>
              </p>
              <hr />
            </li>
          ))}
      </ul>
    </section>
  );
};

export default MoviesCast;
