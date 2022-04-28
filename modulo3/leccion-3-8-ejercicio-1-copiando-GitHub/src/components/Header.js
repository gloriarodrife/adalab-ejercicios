import { Link, Routes, Route } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Routes>
        {['/settings', '/repositories'].map((path, index) => (
          <Route
            path={path}
            key={index}
            element={<div>No apto para manazas.</div>}
          />
        ))}
      </Routes>

      <nav>
        <ul>
          <li>
            <Link to="/overview">Overview</Link>
          </li>
          <li>
            <Link to="/repositories">Repositories</Link>
          </li>
          <li>
            <Link to="/packages">Packages</Link>
          </li>
          <li>
            <Link to="/people">People</Link>
          </li>
          <li>
            <Link to="/teams">Teams</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
