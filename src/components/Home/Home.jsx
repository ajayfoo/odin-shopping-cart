import ProductCard from "../ProductCard/ProductCard";
import classes from "./Home.module.css";
import PropTypes from "prop-types";
export default function Home({ products, onAdd }) {
  return (
    <div aria-label="home page" className={classes.home}>
      {products.map((p) => (
        <ProductCard
          imgSrc={p.imgSrc}
          name={p.name}
          price={p.price}
          onAdd={onAdd}
          key={p.id}
        />
      ))}
    </div>
  );
}

Home.propTypes = {
  products: PropTypes.array.isRequired,
  onAdd: PropTypes.func.isRequired,
};
