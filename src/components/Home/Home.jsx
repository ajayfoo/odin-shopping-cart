import { useOutletContext } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import classes from "./Home.module.css";

export default function Home() {
  const { products, onAdd } = useOutletContext();
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
