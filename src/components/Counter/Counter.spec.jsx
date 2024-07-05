import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";

describe("Counter", () => {
  it("renders it", async () => {
    const setCount = vi.fn();
    const count = 2;
    render(<Counter count={count} setCount={setCount} />);

    const countEle = screen.getByRole("paragraph", {
      name: count + " item(s)",
    });
    const incrementBtn = screen.getByRole("button", { name: "increment" });
    const decrementBtn = screen.getByRole("button", { name: "decrement" });

    expect(incrementBtn).toBeVisible();
    expect(incrementBtn.textContent).toBe("+");

    expect(countEle).toBeVisible();
    expect(countEle.textContent).toMatch(count);

    expect(decrementBtn).toBeVisible();
    expect(decrementBtn.textContent).toBe("-");
  });

  it("calls setCount on increment and decrement", async () => {
    const user = userEvent.setup();
    const setCount = vi.fn();
    render(<Counter count={2} setCount={setCount} />);
    const incrementBtn = screen.getByRole("button", { name: "increment" });
    const decrementBtn = screen.getByRole("button", { name: "decrement" });
    await user.click(incrementBtn);
    await user.click(decrementBtn);
    expect(setCount).toBeCalledTimes(2);
  });
});
