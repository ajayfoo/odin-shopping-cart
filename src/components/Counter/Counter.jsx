import PropTypes from "prop-types";
import classes from "./Counter.module.css";
import { makeid } from "../../utils";

const Counter = ({ count, onDecrement, onIncrement, onEdit }) => {
  return (
    <div aria-label="counter" aria-live="polite" className={classes.counter}>
      <button aria-label="decrement" onClick={onDecrement}>
        -
      </button>
      <input
        id={"counter-count-" + makeid(5)}
        className={classes.count}
        type="text"
        aria-label={count}
        value={count}
        onChange={onEdit}
      />
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
  onEdit: PropTypes.func.isRequired,
};

export default Counter;
