const products = [
  {
    name: "White T-Shirt",
    price: 200,
    imgSrc: "src/test/images/t-shirt.jpg",
    id: 123,
  },
  {
    name: "Different White T-Shirt",
    price: 225,
    imgSrc: "src/test/images/t-shirt.jpg",
    id: 124,
  },
];

const cartItems = [
  {
    name: "White T-Shirt",
    price: 200,
    imgSrc: "src/test/images/t-shirt.jpg",
    id: 123,
    count: 2,
  },
];

const totalCartItemsPrice = cartItems.reduce(
  (acc, curr) => (acc += curr.count * curr.price),
  0
);

const summaries = [
  {
    total: 528,
  },
];

export { products, cartItems, summaries, totalCartItemsPrice };
