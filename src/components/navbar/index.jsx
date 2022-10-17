import "./style.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav-wrapper">
      <h2>LOGO</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/counterContainer">Counter</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
