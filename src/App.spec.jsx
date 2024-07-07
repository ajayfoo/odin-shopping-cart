import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";

describe("App", () => {
  it("renders home page", async () => {
    const router = createMemoryRouter(routes);
    render(<RouterProvider router={router} />);
    const homeEle = screen.getByRole("generic", { name: "home page" });
    expect(homeEle).toBeVisible();
  });

  it("renders cart page when on /cart clicked", () => {
    const router = createMemoryRouter(routes, { initialEntries: ["/cart"] });
    render(<RouterProvider router={router} />);

    const cartPage = screen.getByRole("generic", { name: "cart page" });

    expect(cartPage).toBeVisible();
  });
});
