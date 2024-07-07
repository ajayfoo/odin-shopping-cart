import { Link } from "react-router-dom";
import classes from "./MainNavbar.module.css";
import PropTypes from "prop-types";
import { useState } from "react";

export default function MainNavbar({ cartCount }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const displayCartCount = cartCount > 9 ? "+9" : cartCount;
  const handleClick = ({ target }) => {
    setSelectedIndex(parseInt(target.dataset.index));
  };
  return (
    <nav className={classes["main-nav"]}>
      <Link
        data-index={0}
        onClick={handleClick}
        className={selectedIndex === 0 ? classes.selected : ""}
        to="/"
      >
        Home
      </Link>
      <Link
        data-index={1}
        onClick={handleClick}
        className={
          selectedIndex === 1 ? classes["selected-cart"] : classes.cart
        }
        aria-label="cart"
        to="/cart"
      >
        Cart
        <span
          data-index={1}
          role="alert"
          aria-label="shopping cart items count"
        >
          {displayCartCount}
        </span>
      </Link>
    </nav>
  );
}

MainNavbar.propTypes = {
  cartCount: PropTypes.number.isRequired,
};
