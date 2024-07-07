import { vi } from "vitest";
import PropTypes from "prop-types";

vi.mock("../../ProductCard/ProductCard");

export default function Home({ products, onAdd }) {
  return (
    <div aria-label="home page">
      {products.map((p) => (
        <article key={p.id} aria-label={p.name + " product card"}>
          <button onClick={() => onAdd({ ...p })}>Add To Cart</button>
        </article>
      ))}
    </div>
  );
}

Home.propTypes = {
  products: PropTypes.array.isRequired,
  onAdd: PropTypes.func.isRequired,
};
