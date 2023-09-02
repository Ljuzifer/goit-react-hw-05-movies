import { Toaster } from 'react-hot-toast';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import HomePage from 'pages/HomePage';
// import MoviesPage from 'pages/MoviesPage';
// import MovieDetailsPage from 'pages/MovieDetailsPage';
// import MoviesCast from './MoviesCast/MoviesCast';
// import MoviesReviews from './MoviesReviews/MoviesReviews';
import SharedLayout from './SharedLayout/SharedLayout';

const HomePage = lazy(() => import('../pages/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));
const MoviesCast = lazy(() => import('./MoviesCast/MoviesCast'));
const MoviesReviews = lazy(() => import('./MoviesReviews/MoviesReviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MoviesCast />} />
            <Route path="reviews" element={<MoviesReviews />} />
          </Route>
        </Route>
      </Routes>
      <Toaster />
    </>
  );
};
