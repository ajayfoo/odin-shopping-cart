import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ProductCard from "./ProductCard";
import userEvent from "@testing-library/user-event";

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
    const name = "Product name";
    const price = 200;
    render(<ProductCard name="Product name" imgSrc="" price={200} />);

    const imgEle = screen.getByRole("img", { name: name });
    const nameEle = screen.getByRole("paragraph", { name: "name" });
    const countEle = screen.getByTestId("curr-count");
    const priceEle = screen.getByRole("paragraph", { name: "price" });
    const addToCartBtn = screen.getByRole("button", { name: "Add To Cart" });

    screen.getByRole("article", { name: name + " product card" });

    expect(imgEle).toBeVisible();

    expect(nameEle).toBeVisible();
    expect(nameEle).toHaveTextContent(name);

    expect(countEle).toBeVisible();
    expect(countEle).toHaveValue("0");

    expect(priceEle).toBeVisible();
    expect(priceEle).toHaveTextContent(price);

    expect(addToCartBtn).toBeVisible();
    expect(addToCartBtn).toHaveTextContent("Add To Cart");
  });

  it("increments and decrements product count on clicking increment and decrements button respectively", async () => {
    const user = userEvent.setup();
    render(<ProductCard name="Product name" imgSrc="" price={200} />);
    const countEle = screen.getByTestId("curr-count");
    const incrementBtn = screen.getByTestId("incr-count");
    const decrementBtn = screen.getByTestId("decr-count");

    await user.click(incrementBtn);
    await user.click(incrementBtn);
    await user.click(incrementBtn);
    expect(countEle).toHaveValue("3");

    await user.click(decrementBtn);
    expect(countEle).toHaveValue("2");
  });
});
