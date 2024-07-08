import { describe, expect, it, vi } from "vitest";
import { getByRole, render, screen } from "@testing-library/react";
import Home from "./Home";
import userEvent from "@testing-library/user-event";
import { products } from "../../test/sampleData";

vi.mock("../ProductCard/ProductCard");

const onAdd = vi.fn();
vi.mock("react-router-dom", () => {
  return {
    useOutletContext: () => ({
      products,
      onAdd,
    }),
  };
});

describe("Home", () => {
  it("renders 1 product card", () => {
    render(<Home />);

    screen.getByRole("generic", { name: "home page" });

    const card = screen.getByRole("article", {
      name: products[0].name + " product card",
    });

    expect(card).toBeVisible();
  });

  it("calls onAdd when Add To Cart is clicked", async () => {
    const user = userEvent.setup();
    render(<Home products={products} onAdd={onAdd} />);
    screen.getByRole("generic", { name: "home page" });
    const card = screen.getByRole("article", {
      name: products[0].name + " product card",
    });
    const addToCartBtn = getByRole(card, "button", { name: "Add To Cart" });
    await user.click(addToCartBtn);
    expect(onAdd).toBeCalled();
  });
});
