import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import MainNavbar from "./MainNavbar";

describe("Main navigation bar", () => {
  it("renders it", () => {
    render(<MainNavbar />);
    screen.getByRole("navigation");

    const home = screen.getByRole("link", { name: "Home", value: "home" });
    const shop = screen.getByRole("link", { name: "Shop", value: "shop" });

    expect(home).toBeVisible();
    expect(home).toHaveTextContent("Home");
    expect(home).toHaveAttribute("href", "/");

    expect(shop).toBeVisible();
    expect(shop).toHaveTextContent("Shop");
    expect(shop).toHaveAttribute("href", "shop");
  });
});
