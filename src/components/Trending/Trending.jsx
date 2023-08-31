import { Link, NavLink } from 'react-router-dom';

const Trending = () => {
  return (
    <header>
      <NavLink>
        <ul>
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Search</Link>
          </li>
        </ul>
      </NavLink>
    </header>
  );
};

export default Trending;
