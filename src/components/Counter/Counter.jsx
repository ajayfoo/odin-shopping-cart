import PropTypes from "prop-types";

const Counter = ({ count, onIncrement, onDecrement }) => {
  return (
    <>
      <button aria-label="decrement" onClick={onDecrement}>
        -
      </button>
      <p aria-label={count + " item(s)"}>{count}</p>
      <button aria-label="increment" onClick={onIncrement}>
        +
      </button>
    </>
  );
};

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
};

export default Counter;
