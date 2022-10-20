import "./style.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const cartList = useSelector((store) => store.cartStore.cartList);
  // const cartCount = useSelector((store) => store.cartStore.cartCount);
  return (
    <div className="nav-wrapper">
      <h2>PORTFOLIO</h2>
      <ul className="list-items">
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
        <li>
          <Link to="/sign_in">SignIn</Link>
        </li>
        <li>
          <Link to="/sign_up">SignUp</Link>
        </li>
        <li>
          <Link to="/cart">
            Cart <span>{cartList.length}</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
