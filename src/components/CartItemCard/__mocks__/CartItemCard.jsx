import PropTypes from "prop-types";

const ProductCard = ({ imgSrc, name, price, onAdd }) => {
  return (
    <article aria-label={name + " product card"}>
      <button onClick={() => onAdd({ imgSrc, name, price })}>
        Add To Cart
      </button>
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
