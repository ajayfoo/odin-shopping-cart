import { Link } from "react-router-dom";
import classes from "./MainNavbar.module.css";
import PropTypes from "prop-types";

export default function MainNavbar({ cartCount }) {
  return (
    <nav className={classes["main-nav"]}>
      <Link to="/">Home</Link>
      <Link aria-label="cart" className={classes.cart} to="/cart">
        Cart
        <span role="alert" aria-label="shopping cart items count">
          {cartCount}
        </span>
      </Link>
    </nav>
  );
}

MainNavbar.propTypes = {
  cartCount: PropTypes.number.isRequired,
};
