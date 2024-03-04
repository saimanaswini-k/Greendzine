import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <img src="./home-icon.svg" alt="home" />
      </Link>
      <Link to="/employee">
        <img src="./user-icon.svg" alt="user" />
      </Link>
    </div>
  );
}
