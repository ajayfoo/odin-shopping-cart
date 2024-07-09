import { useOutletContext } from "react-router-dom";
import classes from "./Cart.module.css";
import CartItemCard from "../CartItemCard/CartItemCard";
import Summary from "../Summary/Summary";
import lightCaterpillarImgSrc from "../../images/caterpillar-light.svg";
import darkCaterpillarImgSrc from "../../images/caterpillar-dark.svg";

export default function Cart() {
  const { cartItems, onRemove, onChange } = useOutletContext();
  let content = null;
  if (cartItems.length > 0) {
    content = (
      <div className={classes["cart-items"]} aria-label="cart page">
        <div className={classes.items}>
          {cartItems.map((c) => (
            <CartItemCard
              name={c.name}
              price={c.price}
              imgSrc={c.imgSrc}
              initialCount={c.count}
              onRemove={() => onRemove(c.id)}
              onChange={onChange}
              id={c.id}
              key={c.id}
            />
          ))}
        </div>
        <Summary cartItems={cartItems} />
      </div>
    );
  } else {
    content = (
      <div className={classes["cart-no-items"]} aria-label="cart page">
        <img
          className={classes["light-icon"]}
          src={lightCaterpillarImgSrc}
          alt="caterpillar to indicate cart is empty"
        />
        <img
          className={classes["dark-icon"]}
          src={darkCaterpillarImgSrc}
          alt="caterpillar to indicate cart is empty"
        />
        <p>No items in the cart</p>
      </div>
    );
  }
  return content;
}
