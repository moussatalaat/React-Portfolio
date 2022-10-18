import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";

const Cart = () => {
  //   const cart = useSelector((store) => store.cart);
  const cartList = useSelector((store) => store.cartStore.cartList);
  const cartCount = useSelector((store) => store.cartStore.cartCount);
  const dispatch = useDispatch();
  const handleRemoveFromCart = (prod) => {
    dispatch(removeFromCart(prod));
  };
  return (
    <div>
      <h1>Cart</h1>
      <label>Total items: {cartList.length}</label>

      {cartList.map((product) => {
        return (
          <div
            key={product.id}
            className="single-product w-25 border p-4 d-flex flex-column justify-content-center align-item-center "
          >
            <div to={`/shop/${product.id}`} key={product.id}>
              <img className="product-img" src={product.image} alt="" />
              <h4 className="">{product.title}</h4>
              <h5 className="text-secondary">{product.price} EGP</h5>
              <p>{cartCount}</p>
            </div>
            <button
              onClick={() => handleRemoveFromCart(product)}
              type="button"
              className="btn btn-sm"
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
