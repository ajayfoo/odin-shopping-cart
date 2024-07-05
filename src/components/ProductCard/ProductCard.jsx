import { useState } from "react";
import Counter from "../Counter/Counter";

const ProductCard = () => {
  const [count, setCount] = useState(0);

  return (
    <Counter
      count={count}
      onDecrement={() => setCount(count - 1)}
      onIncrement={() => setCount(count + 1)}
    />
  );
};

export default ProductCard;
