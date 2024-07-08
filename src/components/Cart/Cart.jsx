import { useOutletContext } from "react-router-dom";
import classes from "./Cart.module.css";
import CartItemCard from "../CartItemCard/CartItemCard";
export default function Cart() {
  const { cartItems } = useOutletContext();
  return (
    <div aria-label="cart page">
      <h2>Items</h2>
      <div className={classes.items}>
        {cartItems.map((c) => (
          <CartItemCard
            name={c.name}
            price={c.price}
            imgSrc={c.imgSrc}
            initialCount={c.count}
            onRemove={() => {}}
            id={c.id}
            key={c.id}
          />
        ))}
      </div>
    </div>
  );
}
