import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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

  console.log(params);
  return (
    <div className="details d-flex justify-content-center mt-5">
      <div className="border">
        <img className="product-img w-50" src={product.image} alt="" />
      </div>
      <div>
        <p>{product.title}</p>
        <p>{product.category}</p>
        <p>{product.description}</p>
        <p>{product.price} EGP</p>
      </div>
      <button>Add to Cart</button>
    </div>
  );
};

export default Details;
