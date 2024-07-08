import { getByRole, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { cartItems } from "../../test/sampleData";
import CartItemCard from "./CartItemCard";

vi.mock("../Counter/Counter.jsx");
describe("CartItemCard", () => {
  it("renders it", () => {
    const cartItem = cartItems[0];
    render(<CartItemCard {...cartItem} onRemove={vi.fn()} />);

    const itemCard = screen.getByRole("article", {
      name: cartItem.count + " " + cartItem.name + "(s) cart item card",
    });
    const img = getByRole(itemCard, "img", { name: cartItem.name });
    const name = getByRole(itemCard, "paragraph", { name: cartItem.name });
    const price = getByRole(itemCard, "paragraph", {
      name: cartItem.count + " " + cartItem.name + "(s) price",
    });
    const count = getByRole(itemCard, "textbox", { name: "count" });
    const removeBtn = getByRole(itemCard, "button", { name: "Remove" });

    [img, name, price, count, removeBtn].forEach((e) => {
      expect(e).toBeVisible();
    });
    expect(price).toHaveTextContent(cartItem.price + " INR");
    expect(count).toHaveValue(cartItem.count.toString());
  });
});
