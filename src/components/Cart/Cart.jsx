import { useOutletContext } from "react-router-dom";
import classes from "./Cart.module.css";
import CartItemCard from "../CartItemCard/CartItemCard";
export default function Cart() {
  const { cartItems, onRemove } = useOutletContext();
  let content = null;
  if (cartItems.length > 0) {
    content = (
      <div className={classes.items}>
        {cartItems.map((c) => (
          <CartItemCard
            name={c.name}
            price={c.price}
            imgSrc={c.imgSrc}
            initialCount={c.count}
            onRemove={() => onRemove(c.id)}
            id={c.id}
            key={c.id}
          />
        ))}
      </div>
    );
  } else {
    content = <p className={classes["no-items"]}>No items in the cart</p>;
  }
  return <div aria-label="cart page">{content}</div>;
}
