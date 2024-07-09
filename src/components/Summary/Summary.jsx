import PropTypes from "prop-types";
import classes from "./Summary.module.css";
import { useOutletContext } from "react-router-dom";

const Summary = ({ cartItems }) => {
  const totalCartItemsPrice = cartItems.reduce(
    (acc, curr) => (acc += curr.count * curr.price),
    0
  );
  const { clearCart } = useOutletContext();

  return (
    <div
      className={classes.summary}
      aria-label="summary of cart items and checkout"
    >
      <h2>Summary</h2>
      <div className={classes.total}>
        <p>Total</p>
        <p aria-label="total price">{totalCartItemsPrice}</p>
      </div>
      <button onClick={clearCart} type="button">
        Checkout
      </button>
    </div>
  );
};

Summary.propTypes = {
  cartItems: PropTypes.array.isRequired,
};

export default Summary;
