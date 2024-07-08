import { Link, useLocation } from "react-router-dom";
import classes from "./MainNavbar.module.css";
import PropTypes from "prop-types";

export default function MainNavbar({ cartCount }) {
  const { pathname } = useLocation();
  const displayCartCount = cartCount > 9 ? "+9" : cartCount;
  return (
    <nav className={classes["main-nav"]}>
      <Link
        data-index={0}
        className={pathname === "/" ? classes.selected : ""}
        to="/"
      >
        Home
      </Link>
      <Link
        data-index={1}
        className={
          pathname === "/cart" ? classes["selected-cart"] : classes.cart
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
