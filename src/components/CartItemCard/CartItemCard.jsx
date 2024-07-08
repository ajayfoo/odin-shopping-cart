import { useState } from "react";
import PropTypes from "prop-types";
import Counter from "../Counter/Counter";
import classes from "./CartItemCard.module.css";

const CartItemCard = ({ imgSrc, name, price, id, initialCount, onRemove }) => {
  const [count, setCount] = useState(initialCount);

  const handleDecrement = () => {
    setCount(count <= 1 ? 1 : count - 1);
  };
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleEdit = ({ target: { value } }) => {
    if (value === "" || isNaN(value)) {
      setCount(1);
    } else {
      setCount(parseInt(value));
    }
  };

  const handleRemove = () => {
    onRemove(imgSrc, name, price, count, id);
  };

  return (
    <article
      aria-label={count + " " + name + "(s) cart item card"}
      className={classes["product-card"]}
    >
      <img className={classes["image"]} src={imgSrc} alt={name} />
      <div className={classes["controls"]}>
        <p className={classes.name} aria-label={"name"}>
          {name}
        </p>
        <Counter
          count={count}
          onDecrement={handleDecrement}
          onIncrement={handleIncrement}
          onEdit={handleEdit}
        />
        <p aria-label="price" className={classes["price"]}>
          {price} INR
        </p>
        <button type="button" onClick={handleRemove}>
          Remove
        </button>
      </div>
    </article>
  );
};

CartItemCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  initialCount: PropTypes.number.isRequired,
  onRemove: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default CartItemCard;
