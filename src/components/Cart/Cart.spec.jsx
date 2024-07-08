import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Cart from "./Cart";
import { cartItems } from "../../test/sampleData";

vi.mock("react-router-dom", () => {
  return {
    useOutletContext: () => ({
      cartItems,
    }),
  };
});

describe("Cart", () => {
  it("renders it zero cart item", () => {
    render(<Cart />);
    const itemsHeading = screen.getByRole("heading", {
      level: 2,
      name: "Items",
    });

    expect(itemsHeading).toBeVisible();
    expect(itemsHeading).toHaveTextContent("Items");
  });

  it("renders some cart items", () => {
    render(<Cart />);
    const cartItem = cartItems[0];
    const itemsHeading = screen.getByRole("heading", {
      level: 2,
      name: "Items",
    });

    const itemCard = screen.getByRole("article", {
      name: cartItem.count + " " + cartItem.name + "(s) cart item card",
    });

    expect(itemsHeading).toBeVisible();
    expect(itemCard).toBeVisible();
  });
});
