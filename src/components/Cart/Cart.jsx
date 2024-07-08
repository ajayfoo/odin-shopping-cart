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
    content = (
      <div className={classes["no-items"]}>
        <img
          className={classes["light-icon"]}
          src="src/images/caterpillar-light.svg"
          alt="caterpillar to indicate cart is empty"
        />
        <img
          className={classes["dark-icon"]}
          src="src/images/caterpillar-dark.svg"
          alt="caterpillar to indicate cart is empty"
        />
        <p>No items in the cart</p>
      </div>
    );
  }
  return <div aria-label="cart page">{content}</div>;
}
