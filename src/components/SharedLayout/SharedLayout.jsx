import { BiSolidCameraMovie } from 'react-icons/bi';
import { SiThemoviedatabase } from 'react-icons/si';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { MainHead, NavigationLink } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <MainHead>
        <nav>
          <NavigationLink to="/">
            <SiThemoviedatabase />
            Home
          </NavigationLink>
          <NavigationLink to="/movies">
            <BiSolidCameraMovie />
            Movies
          </NavigationLink>
        </nav>
      </MainHead>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
