import PropTypes from "prop-types";

const Summary = ({ cartItems }) => {
  const totalCartItemsPrice = cartItems.reduce(
    (acc, curr) => (acc += curr.count * curr.price),
    0
  );

  return (
    <div aria-label="summary of cart items and checkout">
      <h2>Summary</h2>
      <div>
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
