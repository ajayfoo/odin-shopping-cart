import PropTypes from "prop-types";
import classes from "./Counter.module.css";

const Counter = ({ count, onIncrement, onDecrement }) => {
  return (
    <div className={classes.counter}>
      <button aria-label="decrement" onClick={onDecrement}>
        -
      </button>
      <p aria-live="polite" aria-label={count + " item(s)"}>
        {count}
      </p>
      <button aria-label="increment" onClick={onIncrement}>
        +
      </button>
    </div>
  );
};

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
};

export default Counter;
