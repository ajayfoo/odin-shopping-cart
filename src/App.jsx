import { Outlet } from "react-router-dom";
import MainNavbar from "./components/MainNavbar/MainNavbar";
import PropTypes from "prop-types";
import { useState } from "react";

function App({ products }) {
  const [cartItems, setCartItems] = useState([]);
  const cartCount = cartItems.length;
  const onAdd = () => {
    setCartItems([...cartItems, {}]);
  };
  return (
    <>
      <MainNavbar cartCount={cartCount} />
      <Outlet context={{ products, onAdd }} />
    </>
  );
}

App.propTypes = {
  products: PropTypes.array.isRequired,
};

export default App;
