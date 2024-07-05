import PropTypes from "prop-types";

const Counter = ({ count, setCount }) => {
  return (
    <>
      <button aria-label="increment" onClick={() => setCount(count + 1)}>
        +
      </button>
      <p aria-label={count + " item(s)"}>{count}</p>
      <button aria-label="decrement" onClick={() => setCount(count - 1)}>
        -
      </button>
    </>
  );
};

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired,
};

export default Counter;
