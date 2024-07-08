import { Outlet } from "react-router-dom";
import MainNavbar from "./components/MainNavbar/MainNavbar";
import PropTypes from "prop-types";
import { useState } from "react";

function App({ products }) {
  const [cartItems, setCartItems] = useState([]);
  const cartCount = cartItems.length;
  const onAdd = (imgSrc, name, price, count, id) => {
    const duplicateIndex = cartItems.findIndex((e) => e.id === id);
    if (duplicateIndex === -1) {
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
    } else {
      const oldCount = cartItems[duplicateIndex].count;
      const updatedCartItem = {
        ...cartItems[duplicateIndex],
        count: oldCount + count,
      };
      setCartItems([
        ...cartItems.slice(0, duplicateIndex),
        updatedCartItem,
        ...cartItems.slice(duplicateIndex + 1),
      ]);
    }
  };
  const onRemove = (id) => {
    setCartItems(cartItems.filter((c) => c.id !== id));
  };
  return (
    <>
      <MainNavbar cartCount={cartCount} />
      <Outlet context={{ products, onAdd, cartItems, onRemove }} />
    </>
  );
}

App.propTypes = {
  products: PropTypes.array.isRequired,
};

export default App;
