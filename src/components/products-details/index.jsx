import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { addToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import "./style.css";

const Details = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  // fetching data
  const fetchProduct = () => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  };
  useEffect(() => {
    // call api once
    fetchProduct();
  });
  const dispatch = useDispatch();
  const handleAddToCart = (prod) => {
    dispatch(addToCart(prod));
  };

  console.log(params);
  return (
    <div className=" d-flex justify-content-center mt-5">
      <div className=" d-flex justify-content-center">
        <img className="product-img w-50" src={product.image} alt="" />
      </div>
      <div>
        <p>{product.title}</p>
        <p>{product.category}</p>
        <p>{product.description}</p>
        <p>{product.price} EGP</p>
        <button
          onClick={() => handleAddToCart(product)}
          type="button"
          className="btn btn-success"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Details;
