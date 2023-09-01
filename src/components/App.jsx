import { Toaster } from 'react-hot-toast';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import MovieInfo from './MovieInfo/MovieInfo';

export const App = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<div>Movies</div>} />
        <Route path="/movies/:movieId" element={<MovieInfo />}>
          <Route path="/movies/:movieId/cast" element={<div>Cast</div>} />
          <Route path="/movies/:movieId/reviews" element={<div>Reviews</div>} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
};
