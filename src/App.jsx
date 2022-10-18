import "./App.css";
import CounterContainer from "./components/counter/counterContainer/CounterContainer";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Shop from "./components/shop";
import ProductDetails from "./components/products-details";
import About from "./components/about";
import Cart from "./components/cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ProductDetails />} />
          <Route path="/counterContainer" element={<CounterContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
