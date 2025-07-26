import { Link } from 'react-router';

const NavBar = () => {
  return (
    <div className="top-nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default NavBar;
