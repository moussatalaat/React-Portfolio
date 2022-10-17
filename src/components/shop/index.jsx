import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Shop = () => {
  //Hooks
  const [products, setProducts] = useState([]);
  // fetching data
  const fetchProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };
  useEffect(() => {
    // call api once
    fetchProducts();
  }, []);

  return (
    <div>
      <h1 className="text-center">Shop</h1>
      <div className="shop-list d-flex flex-wrap">
        {products.map((product) => {
          return (
            <Link
              to={`/shop/${product.id}`}
              key={product.id}
              className="single-product w-25 border p-4 d-flex flex-column justify-content-center align-item-center"
            >
              <img className="product-img" src={product.image} alt="" />
              <h4>{product.title}</h4>
              <h5 className="text-secondary">{product.price} EGP</h5>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
