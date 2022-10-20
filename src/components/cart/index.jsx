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
    <div className="text-center">
      <div className="article">
        <h1>Cart</h1>
        <label>Total items: {cartList.length}</label>

        {cartList.map((product) => {
          return (
            <div
              key={product.id}
              className="single-product w-25 border p-4 d-flex  "
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
                className="btn btn-sm btn-danger"
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
      <label>Total cost: {cartList.price} EGP</label>
    </div>
  );
};

export default Cart;
