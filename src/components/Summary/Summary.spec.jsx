import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { cartItems, totalCartItemsPrice } from "../../test/sampleData";
import Summary from "./Summary";
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

describe("Summary", () => {
  it("renders", () => {
    useOutletContext.mockReturnValue({ clearCart: vi.fn() });
    render(<Summary cartItems={cartItems} />);
    screen.getByRole("generic", { name: "summary of cart items and checkout" });
    const heading = screen.getByRole("heading", { name: "Summary", level: 2 });
    const total = screen.getByText("Total");
    const totalPrice = screen.getByRole("paragraph", { name: "total price" });
    const checkoutBtn = screen.getByRole("button", { name: "Checkout" });

    [heading, total, totalPrice, checkoutBtn].forEach((e) =>
      expect(e).toBeVisible()
    );
    expect(totalPrice).toHaveTextContent(
      totalCartItemsPrice.toString() + " INR"
    );
  });

  it("calls clearCart when checkout is clicked", async () => {
    const user = userEvent.setup();
    const clearCart = vi.fn();
    useOutletContext.mockReturnValue({ clearCart });
    render(<Summary cartItems={cartItems} onCheckout={vi.fn()} />);
    const checkoutBtn = screen.getByRole("button", { name: "Checkout" });

    await user.click(checkoutBtn);
    expect(clearCart).toHaveBeenCalledOnce();
  });
});
