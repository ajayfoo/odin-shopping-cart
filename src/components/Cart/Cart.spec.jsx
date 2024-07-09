import { getByRole, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Cart from "./Cart";
import { cartItems } from "../../test/sampleData";
import userEvent from "@testing-library/user-event";

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
    const noItemsText = "No items in the cart";
    const noItems = screen.getByText(noItemsText);

    expect(noItems).toBeVisible();
    expect(noItems).toHaveTextContent(noItemsText);
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
  it("calls onRemove when Remove button is clicked", async () => {
    const user = userEvent.setup();
    const onRemove = vi.fn();
    const onChange = vi.fn();
    useOutletContext.mockReturnValue({ cartItems, onRemove, onChange });
    render(<Cart />);
    const cartItem = cartItems[0];

    const itemCard = screen.getByRole("article", {
      name: cartItem.count + " " + cartItem.name + "(s) cart item card",
    });

    const removeBtn = getByRole(itemCard, "button", { name: "Remove" });

    await user.click(removeBtn);
    expect(onRemove).toBeCalledTimes(1);
  });
  it("calls onChange when count of a cart item is changed", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    useOutletContext.mockReturnValue({
      cartItems,
      onRemove: vi.fn(),
      onChange,
    });
    render(<Cart />);
    const cartItem = cartItems[0];

    const itemCard = screen.getByRole("article", {
      name: cartItem.count + " " + cartItem.name + "(s) cart item card",
    });

    const incrementBtn = getByRole(itemCard, "button", { name: "increment" });
    const decrementBtn = getByRole(itemCard, "button", { name: "decrement" });

    await user.click(incrementBtn);
    await user.click(decrementBtn);

    expect(onChange).toBeCalledTimes(2);
  });
  it("renders Summary when cart is not empty", () => {
    useOutletContext.mockReturnValue({ cartItems });
    render(<Cart />);
    screen.getByRole("generic", { name: "summary of cart items and checkout" });
  });
});
