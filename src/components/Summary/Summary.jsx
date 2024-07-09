import PropTypes from "prop-types";
import classes from "./Summary.module.css";

const Summary = ({ cartItems }) => {
  const totalCartItemsPrice = cartItems.reduce(
    (acc, curr) => (acc += curr.count * curr.price),
    0
  );

  return (
    <div className={classes.summary} aria-label="summary of cart items and checkout">
      <h2>Summary</h2>
      <div className={classes.total}>
        <p>Total</p>
        <p aria-label="total price">{totalCartItemsPrice}</p>
      </div>
      <button type="button"> Checkout</button>
    </div>
  );
};

Summary.propTypes = {
  cartItems: PropTypes.array.isRequired,
};

export default Summary;
