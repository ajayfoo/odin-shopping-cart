import ProductCard from "../ProductCard/ProductCard";
import classes from "./Home.module.css";

export default function Home() {
  return (
    <div className={classes.home}>
      <ProductCard
        imgSrc="src/images/t-shirt.jpg"
        title="White T-Shirt"
        price={540}
      />
      <ProductCard
        imgSrc="src/images/t-shirt.jpg"
        title="White T-Shirt"
        price={540}
      />
      <ProductCard
        imgSrc="src/images/t-shirt.jpg"
        title="White T-Shirt"
        price={540}
      />
      <ProductCard
        imgSrc="src/images/t-shirt.jpg"
        title="White T-Shirt"
        price={540}
      />
      <ProductCard
        imgSrc="src/images/t-shirt.jpg"
        title="White T-Shirt"
        price={540}
      />
      <ProductCard
        imgSrc="src/images/t-shirt.jpg"
        title="White T-Shirt"
        price={540}
      />
    </div>
  );
}
