import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Cart from "./Cart";
import { cartItems } from "../../test/sampleData";

const { useOutletContext } = vi.hoisted(() => {
  return {
    useOutletContext: vi.fn(),
  };
});

vi.mock("react-router-dom", () => {
  return {
    useOutletContext: useOutletContext,
  };
});

describe("Cart", () => {
  it("renders it zero cart item", () => {
    useOutletContext.mockReturnValue({ cartItems: [] });
    render(<Cart />);
    const noItemsAccName = "No items in the cart";
    const noItems = screen.getByRole("paragraph", noItemsAccName);

    expect(noItems).toBeVisible();
    expect(noItems).toHaveTextContent(noItemsAccName);
  });

  it("renders some cart items", () => {
    useOutletContext.mockReturnValue({ cartItems });
    render(<Cart />);
    const cartItem = cartItems[0];

    const itemCard = screen.getByRole("article", {
      name: cartItem.count + " " + cartItem.name + "(s) cart item card",
    });

    expect(itemCard).toBeVisible();
  });
});
