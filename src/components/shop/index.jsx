import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { addToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
const Shop = () => {
  const dispatch = useDispatch();
  const handleAddToCart = (prod) => {
    dispatch(addToCart(prod));
  };

  // const global = useSelector((store) => store.cartStore.cartCount);

  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1 className="text-center">Shop</h1>
      <div className="shop-list d-flex flex-wrap">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="single-product w-25 border p-4 d-flex flex-column justify-content-center align-item-center "
            >
              <Link to={`/shop/${product.id}`} key={product.id}>
                <img className="product-img" src={product.image} alt="" />
                <h4 className="">{product.title}</h4>
                <h5 className="text-secondary">{product.price} EGP</h5>
              </Link>
              <button
                onClick={() => handleAddToCart(product)}
                type="button"
                className="btn btn-sm"
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
