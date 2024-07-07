import { getByRole, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import getRoutes from "./routes";
import products from "./test/sampleData";

describe("App", () => {
  it("renders home page", async () => {
    const router = createMemoryRouter(getRoutes(products));
    render(<RouterProvider router={router} />);
    const homeEle = screen.getByRole("generic", { name: "home page" });
    expect(homeEle).toBeVisible();
  });

  it("renders cart page when on /cart clicked", () => {
    const router = createMemoryRouter(getRoutes(products), {
      initialEntries: ["/cart"],
    });
    render(<RouterProvider router={router} />);

    const cartPage = screen.getByRole("generic", { name: "cart page" });

    expect(cartPage).toBeVisible();
  });

  it("increments shopping cart items count in its bubble", async () => {
    const user = userEvent.setup();
    const router = createMemoryRouter(getRoutes(products), {
      initialEntries: ["/cart"],
    });
    render(<RouterProvider router={router} />);

    const shoppingCartItemsCountBubble = screen.getByRole("alert", {
      name: "shopping cart items count",
    });

    const sampleProduct = products[0];
    const productCard = screen.getByRole("article", {
      name: sampleProduct + " product card",
    });
    const addToCartBtn = getByRole(productCard, "button", {
      name: "Add To Cart",
    });

    await user.click(addToCartBtn);
    expect(shoppingCartItemsCountBubble).toHaveTextContent("1");
  });
});
