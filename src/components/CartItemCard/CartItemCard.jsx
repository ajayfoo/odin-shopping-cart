import PropTypes from "prop-types";
import Counter from "../Counter/Counter";
const CartItemCard = ({ name, price, imgSrc, count, onRemove }) => {
  return (
    <article aria-label={count + " " + name + "(s) cart item card"}>
      <img src={imgSrc} alt={name} />
      <p aria-label={name}>{name}</p>
      <p aria-label={count + " " + name + "(s) price"}>{price + " INR"}</p>
      <Counter
        count={count}
        onIncrement={() => {}}
        onDecrement={() => {}}
        onEdit={() => {}}
      />
      <button type="button" onClick={onRemove}>
        Remove
      </button>
    </article>
  );
};

CartItemCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imgSrc: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default CartItemCard;
