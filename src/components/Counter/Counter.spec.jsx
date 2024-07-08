import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";

describe("Counter", () => {
  it("renders it", async () => {
    const count = 2;
    const fn = vi.fn();

    render(
      <Counter count={count} onIncrement={fn} onDecrement={fn} onEdit={fn} />
    );

    screen.getByRole("generic", { name: "counter" });

    const input = screen.getByRole("spinbutton", {
      name: "count",
    });
    const incrementBtn = screen.getByRole("button", { name: "increment" });
    const decrementBtn = screen.getByRole("button", { name: "decrement" });

    expect(incrementBtn).toBeVisible();
    expect(incrementBtn).toHaveTextContent("+");

    expect(input).toBeVisible();
    expect(input).toHaveValue(count);

    expect(decrementBtn).toBeVisible();
    expect(decrementBtn).toHaveTextContent("-");
  });

  it("calls onIncrement and onDecrement when it's corresponding button is clicked", async () => {
    const user = userEvent.setup();
    const incrementCount = vi.fn();
    const decrementCount = vi.fn();

    render(
      <Counter
        count={0}
        onIncrement={incrementCount}
        onDecrement={decrementCount}
        onEdit={vi.fn()}
      />
    );

    const incrementBtn = screen.getByRole("button", { name: "increment" });
    const decrementBtn = screen.getByRole("button", { name: "decrement" });
    await user.click(incrementBtn);
    expect(incrementCount).toBeCalledTimes(1);

    await user.click(decrementBtn);
    expect(decrementCount).toBeCalledTimes(1);
  });

  it("calls onEdit when input is changed", async () => {
    const user = userEvent.setup();
    const incrementCount = vi.fn();
    const decrementCount = vi.fn();
    const onEdit = vi.fn();
    const count = 2;

    render(
      <Counter
        count={count}
        onIncrement={incrementCount}
        onDecrement={decrementCount}
        onEdit={onEdit}
      />
    );

    const newCount = 8;
    const input = screen.getByRole("spinbutton", { name: "count" });
    await user.click(input);
    await user.keyboard(newCount.toString());
    expect(onEdit).toBeCalled(1);
  });
});
