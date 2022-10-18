import "./style.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const cartList = useSelector((store) => store.cartStore.cartList);
  // const cartCount = useSelector((store) => store.cartStore.cartCount);
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
        <li>
          <Link to="/cart">
            Cart <div>{cartList.length}</div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
