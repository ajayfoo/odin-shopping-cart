import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ProductCard from "./ProductCard";

vi.mock("../Counter/Counter", () => {
  const mockedCounter = ({ count, onDecrement, onIncrement }) => (
    <>
      <div onClick={onDecrement} data-testid="decr-count">
        -
      </div>
      <div data-testid="curr-count">{count}</div>
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
    const count = screen.getByTestId("curr-count");
    expect(count.textContent).toMatch(0);
  });
});
