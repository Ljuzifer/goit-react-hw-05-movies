import { Toaster } from 'react-hot-toast';
import { NavLink, Route, Routes } from 'react-router-dom';
import MoviesPage from 'pages/MoviesPage';
import MovieDetailsPage from 'pages/MovieDetailsPage';
import HomePage from 'pages/HomePage';

export const App = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="/movies/:movieId/cast" element={<div>Cast</div>} />
          <Route path="/movies/:movieId/reviews" element={<div>Reviews</div>} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
};
