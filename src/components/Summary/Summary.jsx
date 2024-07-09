import PropTypes from "prop-types";

const Summary = ({ cartItems }) => {
  const totalCartItemsPrice = cartItems.reduce(
    (acc, curr) => (acc += curr.count * curr.price),
    0
  );

  return (
    <div>
      <h2>Summary</h2>
      <div className="total">
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
