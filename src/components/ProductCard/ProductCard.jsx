import { useState } from "react";
import PropTypes from "prop-types";
import Counter from "../Counter/Counter";
import classes from "./ProductCard.module.css";

const ProductCard = ({ imgSrc, name, price, onAdd }) => {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    setCount(count <= 0 ? 0 : count - 1);
  };
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleEdit = ({ target: { value } }) => {
    if (value === "" || isNaN(value)) {
      setCount(0);
    } else {
      setCount(parseInt(value));
    }
  };

  return (
    <article
      aria-label={name + " product card"}
      className={classes["product-card"]}
    >
      <img className={classes["image"]} src={imgSrc} alt={name} />
      <div className={classes["controls"]}>
        <p aria-label={"name"}>{name}</p>
        <Counter
          count={count}
          onDecrement={handleDecrement}
          onIncrement={handleIncrement}
          onEdit={handleEdit}
        />
        <p aria-label="price" className={classes["price"]}>
          {price} INR
        </p>
        <button type="button" onClick={onAdd}>
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
};

export default ProductCard;
