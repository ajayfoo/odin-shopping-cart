import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ProductCard from "./ProductCard";
describe("Main navigation bar", () => {
  it("renders it", () => {
    render(<ProductCard />);
  });
});
