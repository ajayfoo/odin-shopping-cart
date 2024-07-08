import { getByRole, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import getRoutes from "./routes";
import { products } from "./test/sampleData";

describe("App", () => {
  it("renders home page", async () => {
    const router = createMemoryRouter(getRoutes(products));
    render(<RouterProvider router={router} />);
    const homeEle = screen.getByRole("generic", { name: "home page" });
    expect(homeEle).toBeVisible();
  });

  it("renders cart page when on /cart", () => {
    const router = createMemoryRouter(getRoutes(products), {
      initialEntries: ["/cart"],
    });
    render(<RouterProvider router={router} />);

    const cartPage = screen.getByRole("generic", { name: "cart page" });

    expect(cartPage).toBeVisible();
  });

  it("increments shopping cart items count in its bubble when Add To Cart is clicked", async () => {
    const user = userEvent.setup();
    const router = createMemoryRouter(getRoutes(products));
    render(<RouterProvider router={router} />);

    const shoppingCartItemsCountBubble = screen.getByRole("alert", {
      name: "shopping cart items count",
    });

    const sampleProduct = products[0];
    const productCard = screen.getByRole("article", {
      name: sampleProduct.name + " product card",
    });
    const addToCartBtn = getByRole(productCard, "button", {
      name: "Add To Cart",
    });

    await user.click(addToCartBtn);
    expect(shoppingCartItemsCountBubble).toHaveTextContent("1");
  });

  it("adds product(s) to cart when Add To Cart is clicked", async () => {
    const user = userEvent.setup();
    const router = createMemoryRouter(getRoutes(products));
    render(<RouterProvider router={router} />);

    const cartLink = screen.getByRole("link", { name: "cart" });

    const sampleProduct = products[0];
    const productCard = screen.getByRole("article", {
      name: sampleProduct.name + " product card",
    });
    const addToCartBtn = getByRole(productCard, "button", {
      name: "Add To Cart",
    });

    await user.click(addToCartBtn);
    await user.click(cartLink);

    screen.getByRole("article", {
      name: "1 " + sampleProduct.name + "(s) cart item card",
    });
  });
  it("adds product(s) to cart and removes corresponding cart item when Remove button is clicked", async () => {
    const user = userEvent.setup();
    const router = createMemoryRouter(getRoutes(products));
    render(<RouterProvider router={router} />);

    const cartLink = screen.getByRole("link", { name: "cart" });

    const sampleProduct = products[0];
    const productCard = screen.getByRole("article", {
      name: sampleProduct.name + " product card",
    });
    const addToCartBtn = getByRole(productCard, "button", {
      name: "Add To Cart",
    });

    await user.click(addToCartBtn);
    await user.click(cartLink);

    const cartItem = screen.getByRole("article", {
      name: "1 " + sampleProduct.name + "(s) cart item card",
    });

    const removeBtn = getByRole(cartItem, "button", {
      name: "Remove",
    });

    await user.click(removeBtn);

    expect(cartItem).not.toBeInTheDocument();
  });

  it("sets count to MIN_COUNT when Add To Cart is clicked", async () => {
    const user = userEvent.setup();
    const MIN_COUNT = 1;
    const router = createMemoryRouter(getRoutes(products));
    render(<RouterProvider router={router} />);

    const sampleProduct = products[0];
    const productCard = screen.getByRole("article", {
      name: sampleProduct.name + " product card",
    });
    const incrementBtn = getByRole(productCard, "button", {
      name: "increment",
    });
    const count = getByRole(productCard, "spinbutton", { name: "count" });

    await user.click(incrementBtn);
    await user.click(incrementBtn);
    await user.click(incrementBtn);
    const numberOfTimesClicked = 3;

    expect(count).toHaveValue(MIN_COUNT + numberOfTimesClicked);
    const addToCartBtn = getByRole(productCard, "button", {
      name: "Add To Cart",
    });
    await user.click(addToCartBtn);
    expect(count).toHaveValue(MIN_COUNT);
  });

  it("adds products to the same cart item if the same product exits in the cart", async () => {
    const user = userEvent.setup();
    const router = createMemoryRouter(getRoutes(products));
    render(<RouterProvider router={router} />);

    const cartLink = screen.getByRole("link", { name: "cart" });

    const sampleProduct = products[0];
    const productCard = screen.getByRole("article", {
      name: sampleProduct.name + " product card",
    });
    const addToCartBtn = getByRole(productCard, "button", {
      name: "Add To Cart",
    });

    await user.click(addToCartBtn);
    await user.click(addToCartBtn);

    await user.click(cartLink);

    const expectedCountInCart = 2;

    screen.getByRole("article", {
      name:
        expectedCountInCart + " " + sampleProduct.name + "(s) cart item card",
    });
  });
});
