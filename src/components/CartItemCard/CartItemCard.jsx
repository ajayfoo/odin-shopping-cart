import { useState } from "react";
import PropTypes from "prop-types";
import Counter from "../Counter/Counter";
import classes from "./CartItemCard.module.css";

const CartItemCard = ({
  imgSrc,
  name,
  price,
  id,
  initialCount,
  onRemove,
  onChange,
}) => {
  const MIN_COUNT = 1;
  const [count, setCount] = useState(initialCount);

  const handleDecrement = () => {
    if (count <= 1) {
      handleRemove();
      return;
    }
    const newCount = count - 1;
    setCount(newCount);
    onChange(id, newCount);
  };
  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    onChange(id, newCount);
  };

  const handleRemove = () => {
    onRemove(imgSrc, name, price, count, id);
  };

  const handleEdit = ({ target: { value } }) => {
    const num = parseInt(value);
    if (isNaN(num)) {
      setCount(MIN_COUNT);
      onChange(id, MIN_COUNT);
    } else {
      if (num <= 0) {
        handleRemove();
      }
      setCount(num);
      onChange(id, num);
    }
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
  onChange: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default CartItemCard;
