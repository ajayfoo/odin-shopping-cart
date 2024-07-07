import { describe, expect, it, vi } from "vitest";
import { getByRole, render, screen } from "@testing-library/react";
import Home from "./Home";
import userEvent from "@testing-library/user-event";

vi.mock("../ProductCard/ProductCard");

describe("Home", () => {
  it("renders 1 product card", () => {
    const onAdd = vi.fn();
    const singleProduct = {
      name: "White T-Shirt",
      price: 200,
      imgSrc: "src/images/t-shirt.png",
      id: 123,
    };
    const products = [singleProduct];

    render(<Home products={products} onAdd={onAdd} />);

    screen.getByRole("generic", { name: "home page" });

    const card = screen.getByRole("article", {
      name: singleProduct.name + " product card",
    });

    expect(card).toBeVisible();
  });

  it("calls onAdd when Add To Cart is clicked", async () => {
    const user = userEvent.setup();
    const onAdd = vi.fn();
    const singleProduct = {
      name: "White T-Shirt",
      price: 200,
      imgSrc: "src/images/t-shirt.png",
      id: 123,
    };
    const products = [singleProduct];
    render(<Home products={products} onAdd={onAdd} />);
    screen.getByRole("generic", { name: "home page" });
    const card = screen.getByRole("article", {
      name: singleProduct.name + " product card",
    });
    const addToCartBtn = getByRole(card, "button", { name: "Add To Cart" });
    await user.click(addToCartBtn);
    expect(onAdd).toBeCalled();
  });
});
