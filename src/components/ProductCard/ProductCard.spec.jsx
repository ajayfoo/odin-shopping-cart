import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ProductCard from "./ProductCard";
import userEvent from "@testing-library/user-event";

vi.mock("../Counter/Counter");

describe("ProductCard", () => {
  it("renders it", async () => {
    const name = "Product name";
    const price = 200;
    render(
      <ProductCard
        name="Product name"
        imgSrc=""
        price={200}
        id={123}
        onAdd={vi.fn()}
      />
    );

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
    expect(countEle).toHaveValue("1");

    expect(priceEle).toBeVisible();
    expect(priceEle).toHaveTextContent(price);

    expect(addToCartBtn).toBeVisible();
    expect(addToCartBtn).toHaveTextContent("Add To Cart");
  });

  it("increments and decrements product count on clicking increment and decrements button respectively", async () => {
    const user = userEvent.setup();
    render(
      <ProductCard
        name="Product name"
        imgSrc=""
        price={200}
        id={123}
        onAdd={vi.fn()}
      />
    );
    const countEle = screen.getByTestId("curr-count");
    const incrementBtn = screen.getByTestId("incr-count");
    const decrementBtn = screen.getByTestId("decr-count");

    await user.click(incrementBtn);
    await user.click(incrementBtn);
    await user.click(incrementBtn);
    expect(countEle).toHaveValue("4");

    await user.click(decrementBtn);
    expect(countEle).toHaveValue("3");
  });
  it("sets product count on editing count textbox respectively", async () => {
    const user = userEvent.setup();
    render(
      <ProductCard
        name="Product name"
        imgSrc=""
        price={200}
        id={123}
        onAdd={vi.fn()}
      />
    );
    const countEle = screen.getByTestId("curr-count");

    const insertKey = "5";
    const newCount = "1" + insertKey;

    await user.click(countEle);
    await user.keyboard(insertKey);
    expect(countEle).toHaveValue(newCount);
  });
  it("calls onAdd when Add To Cart button is clicked", async () => {
    const user = userEvent.setup();
    const onAdd = vi.fn();
    render(
      <ProductCard
        name="Product name"
        imgSrc=""
        price={200}
        id={123}
        onAdd={onAdd}
      />
    );
    const addToCartBtn = screen.getByRole("button", { name: "Add To Cart" });

    await user.click(addToCartBtn);
    expect(onAdd).toHaveBeenCalledTimes(1);
  });
});
