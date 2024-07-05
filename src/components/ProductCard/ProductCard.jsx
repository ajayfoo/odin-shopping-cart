import { useState } from "react";
import Counter from "../Counter/Counter";

const ProductCard = () => {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    setCount(count <= 0 ? 0 : count + 1);
  };
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleEdit = ({ target: { value } }) => {
    if (value === "" || isNaN(value)) {
      setCount(0);
    } else {
      setCount(parseInt(value));
    }
  };

  return (
    <Counter
      count={count}
      onDecrement={handleDecrement}
      onIncrement={handleIncrement}
      onEdit={handleEdit}
    />
  );
};

export default ProductCard;
