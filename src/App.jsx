import { Outlet } from "react-router-dom";
import MainNavbar from "./components/MainNavbar/MainNavbar";
import PropTypes from "prop-types";
import { useState } from "react";

function App({ products }) {
  const [cartItems, setCartItems] = useState([]);
  const cartCount = cartItems.length;
  const onAdd = (imgSrc, name, price, count, id) => {
    setCartItems([
      ...cartItems,
      {
        imgSrc,
        name,
        price,
        count,
        id,
      },
    ]);
  };
  return (
    <>
      <MainNavbar cartCount={cartCount} />
      <Outlet context={{ products, onAdd, cartItems }} />
    </>
  );
}

App.propTypes = {
  products: PropTypes.array.isRequired,
};

export default App;
