import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Home", () => {
  it("renders it", () => {
    render(<Home products={[]} />);
    screen.getByRole("generic", { name: "home page" });
  });
});
