import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ProductCard from "./ProductCard";

vi.mock("../Counter/Counter", () => {
  const mockedCounter = ({ count, onDecrement, onIncrement, onEdit }) => (
    <>
      <div onClick={onDecrement} data-testid="decr-count">
        -
      </div>
      <input
        type="text"
        data-testid="curr-count"
        value={count}
        onChange={onEdit}
      />
      <div onClick={onIncrement} data-testid="incr-count">
        +
      </div>
    </>
  );
  return {
    default: mockedCounter,
  };
});

describe("ProductCard", () => {
  it("renders it", async () => {
    render(<ProductCard />);
    const countEle = screen.getByTestId("curr-count");
    expect(countEle).toHaveValue("0");
  });
});
