import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { fetchMovieInfo } from 'services/api';
import { TbMoodCry } from 'react-icons/tb';

const MoviesReviews = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const route = `/movie/${movieId}/reviews`;
    toast.loading('Wait a minute...', { duration: 400 });

    setTimeout(async () => {
      try {
        const { results } = await fetchMovieInfo(route);
        if (results?.length === 0) {
          toast('Sorry, no reviews...');
          return;
        }
        setDetails([...results]);
        toast.success('You`ve got it!');
      } catch (error) {
        console.warn(error);
        toast.error('Oops! Something went wrong...');
      }
    }, 400);
  }, [movieId]);

  return (
    <section>
      {details?.length === 0 && (
        <b style={{ textAlign: 'center' }}>
          Sorry, we don't have any reviews for this movie...
          <TbMoodCry />
        </b>
      )}

      <ul style={{ listStyle: 'none' }}>
        {details.map(item => (
          <li key={item.id}>
            <p>
              Author: <b>{item.author} </b>
            </p>
            <span style={{ textDecoration: 'underline' }}>
              {item.created_at.slice(0, 10)}{' '}
            </span>
            <p>{item.content}</p>
            <hr />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MoviesReviews;