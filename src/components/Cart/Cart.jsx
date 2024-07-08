import { useOutletContext } from "react-router-dom";
import CartItemCard from "../CartItemCard/CartItemCard";

export default function Cart() {
  const { cartItems } = useOutletContext();
  return (
    <div aria-label="cart page">
      <h2>Items</h2>
      <div className="items">
        {cartItems.map((c) => (
          <CartItemCard
            name={c.name}
            price={c.price}
            imgSrc={c.imgSrc}
            count={c.count}
            onRemove={() => {}}
            key={c.id}
          />
        ))}
      </div>
    </div>
  );
}
