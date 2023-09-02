import { BiSolidCameraMovie } from 'react-icons/bi';
import { SiThemoviedatabase } from 'react-icons/si';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">
            <SiThemoviedatabase />
            Home
          </NavLink>
          <NavLink to="/movies">
            <BiSolidCameraMovie />
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
