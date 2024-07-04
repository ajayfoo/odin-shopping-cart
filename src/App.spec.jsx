import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("App", () => {
  it("renders it", () => {
    render(<App />);
    const nav = screen.getByRole("navigation");
    expect(nav).toBeVisible();
  });
});
