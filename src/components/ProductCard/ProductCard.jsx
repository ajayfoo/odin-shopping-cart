import { useState } from "react";
import PropTypes from "prop-types";
import Counter from "../Counter/Counter";
import classes from "./ProductCard.module.css";

const ProductCard = ({ imgSrc, title, price }) => {
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
    <div className={classes["product-card"]}>
      <img className={classes["image"]} src={imgSrc} alt={title} />
      <div className={classes["controls"]}>
        <p aria-label={title}>{title}</p>
        <Counter
          count={count}
          onDecrement={handleDecrement}
          onIncrement={handleIncrement}
          onEdit={handleEdit}
        />
        <p className={classes["price"]}>{price} INR</p>
        <button type="button">Add To Cart</button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;
