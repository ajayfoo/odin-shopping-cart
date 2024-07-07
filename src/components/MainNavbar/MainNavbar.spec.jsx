import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import MainNavbar from "./MainNavbar";
import { MemoryRouter } from "react-router-dom";

describe("Main navigation bar", () => {
  it("renders it", () => {
    const cartCount = 2;
    render(
      <MemoryRouter>
        <MainNavbar cartCount={cartCount} />
      </MemoryRouter>
    );
    screen.getByRole("navigation");

    const home = screen.getByRole("link", { name: "Home", value: "home" });
    const shop = screen.getByRole("link", { name: "cart", value: "cart" });

    const shoppingCartItemsCountBubble = screen.getByRole("alert", {
      name: "shopping cart items count",
    });

    expect(home).toBeVisible();
    expect(home).toHaveTextContent("Home");
    expect(home).toHaveAttribute("href", "/");

    expect(shop).toBeVisible();
    expect(shop).toHaveTextContent("Cart");
    expect(shop).toHaveAttribute("href", "/cart");

    expect(shoppingCartItemsCountBubble).toBeVisible();
    expect(shoppingCartItemsCountBubble).toHaveTextContent(
      cartCount.toString()
    );
  });
  it("shows +9 when cart items count is more than 9", () => {
    const cartCount = 11;
    render(
      <MemoryRouter>
        <MainNavbar cartCount={cartCount} />
      </MemoryRouter>
    );

    const shoppingCartItemsCountBubble = screen.getByRole("alert", {
      name: "shopping cart items count",
    });

    expect(shoppingCartItemsCountBubble).toHaveTextContent("+9");
  });
});
