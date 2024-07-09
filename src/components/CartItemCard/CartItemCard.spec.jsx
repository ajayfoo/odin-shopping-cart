import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import CartItemCard from "./CartItemCard";
import { cartItems } from "../../test/sampleData";

vi.mock("../Counter/Counter");

describe("CartItemCard", () => {
  it("renders it", async () => {
    const { name, count, imgSrc, id, price } = cartItems[0];
    render(
      <CartItemCard
        name={name}
        imgSrc={imgSrc}
        price={price}
        initialCount={count}
        id={id}
        onRemove={vi.fn()}
        onChange={vi.fn()}
      />
    );

    screen.getByRole("article", {
      name: count + " " + name + "(s) cart item card",
    });

    const imgEle = screen.getByRole("img", { name: name });
    const nameEle = screen.getByRole("paragraph", { name: "name" });
    const countEle = screen.getByTestId("curr-count");
    const priceEle = screen.getByRole("paragraph", { name: "price" });
    const removeBtn = screen.getByRole("button", { name: "Remove" });

    expect(imgEle).toBeVisible();

    expect(nameEle).toBeVisible();
    expect(nameEle).toHaveTextContent(name);

    expect(countEle).toBeVisible();
    expect(countEle).toHaveValue(count);

    expect(priceEle).toBeVisible();
    expect(priceEle).toHaveTextContent(price);

    expect(removeBtn).toBeVisible();
    expect(removeBtn).toHaveTextContent("Remove");
  });

  it("increments and decrements product count on clicking increment and decrements button respectively", async () => {
    const user = userEvent.setup();
    const { name, count, imgSrc, id, price } = cartItems[0];
    render(
      <CartItemCard
        name={name}
        imgSrc={imgSrc}
        price={price}
        initialCount={count}
        id={id}
        onRemove={vi.fn()}
        onChange={vi.fn()}
      />
    );
    const countEle = screen.getByTestId("curr-count");
    const incrementBtn = screen.getByTestId("incr-count");
    const decrementBtn = screen.getByTestId("decr-count");

    await user.click(incrementBtn);
    await user.click(incrementBtn);
    await user.click(incrementBtn);
    expect(countEle).toHaveValue(count + 3);

    await user.click(decrementBtn);
    expect(countEle).toHaveValue(count + 2);
  });
  it("sets product count on editing count textbox respectively", async () => {
    const user = userEvent.setup();
    const { name, count, imgSrc, id, price } = cartItems[0];
    render(
      <CartItemCard
        name={name}
        imgSrc={imgSrc}
        price={price}
        initialCount={count}
        id={id}
        onRemove={vi.fn()}
        onChange={vi.fn()}
      />
    );
    const countEle = screen.getByTestId("curr-count");

    const insertKey = 5;
    const newCount = parseInt(count + "" + insertKey);

    await user.click(countEle);
    await user.keyboard(insertKey.toString());
    expect(countEle).toHaveValue(newCount);
  });
  it("calls onRemove when Remove button is clicked", async () => {
    const user = userEvent.setup();
    const { name, count, imgSrc, id, price } = cartItems[0];
    const onRemove = vi.fn();
    render(
      <CartItemCard
        name={name}
        imgSrc={imgSrc}
        price={price}
        initialCount={count}
        id={id}
        onRemove={onRemove}
        onChange={vi.fn()}
      />
    );
    const removeBtn = screen.getByRole("button", { name: "Remove" });

    await user.click(removeBtn);
    expect(onRemove).toHaveBeenCalledTimes(1);
  });
  it("calls onRemove when count is less than 2 and decrement is clicked", async () => {
    const user = userEvent.setup();
    const { name, imgSrc, id, price } = cartItems[0];
    const onRemove = vi.fn();
    render(
      <CartItemCard
        name={name}
        imgSrc={imgSrc}
        price={price}
        initialCount={1}
        id={id}
        onRemove={onRemove}
        onChange={vi.fn()}
      />
    );

    const decrementBtn = screen.getByTestId("decr-count");

    await user.click(decrementBtn);
    expect(onRemove).toHaveBeenCalledTimes(1);
  });
  it("calls onChange when count is changed", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const { name, imgSrc, id, price } = cartItems[0];
    let count = 2;
    render(
      <CartItemCard
        name={name}
        imgSrc={imgSrc}
        price={price}
        initialCount={count}
        id={id}
        onRemove={vi.fn()}
        onChange={onChange}
      />
    );

    const decrementBtn = screen.getByTestId("decr-count");

    await user.click(decrementBtn);
    expect(onChange).toHaveBeenCalledOnce();
  });
});
