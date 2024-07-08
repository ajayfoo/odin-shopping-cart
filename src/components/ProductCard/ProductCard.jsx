import { useState } from "react";
import PropTypes from "prop-types";
import Counter from "../Counter/Counter";
import classes from "./ProductCard.module.css";

const ProductCard = ({ imgSrc, name, price, onAdd, id }) => {
  const MIN_COUNT = 1;
  const [count, setCount] = useState(MIN_COUNT);

  const handleDecrement = () => {
    setCount(count <= 1 ? MIN_COUNT : count - 1);
  };
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleEdit = ({ target: { value } }) => {
    if (value === "" || isNaN(value)) {
      setCount(MIN_COUNT);
    } else {
      setCount(parseInt(value));
    }
  };

  const handleAddToCart = () => {
    if (count <= 0) return;
    onAdd(imgSrc, name, price, count, id);
  };

  return (
    <article
      aria-label={name + " product card"}
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
        <button type="button" onClick={handleAddToCart}>
          Add To Cart
        </button>
      </div>
    </article>
  );
};

ProductCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onAdd: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default ProductCard;
