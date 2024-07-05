import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";

describe("Counter", () => {
  it("renders it", async () => {
    const count = 2;
    render(<Counter count={2} onIncrement={vi.fn()} onDecrement={vi.fn()} />);

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

  it("calls onIncrement and onDecrement", async () => {
    const user = userEvent.setup();
    const incrementCount = vi.fn();
    const decrementCount = vi.fn();
    render(
      <Counter
        count={2}
        onIncrement={incrementCount}
        onDecrement={decrementCount}
      />
    );
    const incrementBtn = screen.getByRole("button", { name: "increment" });
    const decrementBtn = screen.getByRole("button", { name: "decrement" });
    await user.click(incrementBtn);
    expect(incrementCount).toBeCalledTimes(1);

    await user.click(decrementBtn);
    expect(decrementCount).toBeCalledTimes(1);
  });
});
