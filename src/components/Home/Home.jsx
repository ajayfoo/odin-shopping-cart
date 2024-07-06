import ProductCard from "../ProductCard/ProductCard";
import classes from "./Home.module.css";

export default function Home() {
  return (
    <div aria-label="home page" className={classes.home}>
      <ProductCard
        imgSrc="src/images/t-shirt.jpg"
        name="White T-Shirt"
        price={540}
      />
      <ProductCard
        imgSrc="src/images/t-shirt.jpg"
        name="White T-Shirt"
        price={540}
      />
      <ProductCard
        imgSrc="src/images/t-shirt.jpg"
        name="White T-Shirt"
        price={540}
      />
      <ProductCard
        imgSrc="src/images/t-shirt.jpg"
        name="White T-Shirt"
        price={540}
      />
      <ProductCard
        imgSrc="src/images/t-shirt.jpg"
        name="White T-Shirt"
        price={540}
      />
      <ProductCard
        imgSrc="src/images/t-shirt.jpg"
        name="White T-Shirt"
        price={540}
      />
    </div>
  );
}
