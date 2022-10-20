import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import "./style.css";
import { addToCart } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/productsSlice";
const Shop = () => {
  const dispatch = useDispatch();
  const handleAddToCart = (prod) => {
    dispatch(addToCart(prod));
  };
  const productsList = useSelector((store) => store.productsStore.productsList);
  // console.log("Hello API", productsList);
  const loadingSpinner = useSelector((store) => store.productsStore.loading);
  // console.log("Hello Spinner", loadingSpinner);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (loadingSpinner) {
    return (
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <Spinner animation="grow" />
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-center">Shop</h1>
      <div className="shop-list d-flex flex-wrap">
        {productsList.map((product) => {
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
