import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { cartItems, totalCartItemsPrice } from "../../test/sampleData";
import Summary from "./Summary";
describe("Summary", () => {
  it("renders", () => {
    render(<Summary cartItems={cartItems} />);
    const heading = screen.getByRole("heading", { name: "Summary", level: 2 });
    const totalPara = screen.getByText("Total");
    const total = screen.getByRole("paragraph", { name: "total price" });
    const checkoutBtn = screen.getByRole("button", { name: "Checkout" });

    [heading, totalPara, total, checkoutBtn].forEach((e) =>
      expect(e).toBeVisible()
    );
    expect(total).toHaveTextContent(totalCartItemsPrice.toString());
  });
});
