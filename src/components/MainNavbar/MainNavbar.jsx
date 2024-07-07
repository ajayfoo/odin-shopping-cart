import { Link } from "react-router-dom";
import classes from "./MainNavbar.module.css";
import PropTypes from "prop-types";

export default function MainNavbar({ cartCount }) {
  return (
    <nav className={classes["main-nav"]}>
      <Link to="/">Home</Link>
      <span className="cart">
        <Link to="/cart">Cart</Link>
        <span role="alert" aria-label="shopping cart items count">
          {cartCount}
        </span>
      </span>
    </nav>
  );
}

MainNavbar.propTypes = {
  cartCount: PropTypes.number.isRequired,
};
