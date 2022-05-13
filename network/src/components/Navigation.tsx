import { Link } from "react-router-dom";

// Define type
const Navigation = (): JSX.Element => {
  return (
    <nav className="h-20 bg-blue-500 text-white">
      <ul className="flex items-center justify-between h-full px-10">
        <Link to="/">
          <li>Discover</li>
        </Link>
        <Link to="/workcontainer">
          <li> Friends </li>
        </Link>
        <Link to="/liveportal">
          <li> Colleges </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navigation;
