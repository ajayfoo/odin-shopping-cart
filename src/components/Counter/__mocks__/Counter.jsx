import PropTypes from "prop-types";

const Counter = ({ count, onDecrement, onIncrement, onEdit }) => {
  return (
    <>
      <div onClick={onDecrement} data-testid="decr-count">
        -
      </div>
      <input
        type="text"
        data-testid="curr-count"
        value={count}
        onChange={onEdit}
      />
      <div onClick={onIncrement} data-testid="incr-count">
        +
      </div>
    </>
  );
};

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default Counter;
