import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

describe("App", () => {
  it("renders it", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });
});
