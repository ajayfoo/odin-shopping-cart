import { Outlet } from "react-router-dom";
import MainNavbar from "./components/MainNavbar/MainNavbar";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const cartCount = cartItems.reduce((acc, curr) => (acc += curr.count), 0);

  useEffect(() => {
    let ignore = false;
    if (ignore) return;
    const fetchAndSetProducts = async () => {
      const allProducts = await fetch("https://fakestoreapi.com/products").then(
        (res) => res.json()
      );
      const normalizedProducts = allProducts.map((p) => ({
        id: p.id,
        name: p.title,
        imgSrc: p.image,
        price: parseInt(p.price),
      }));
      setProducts(normalizedProducts);
    };
    fetchAndSetProducts();
    return () => {
      ignore = true;
    };
  }, []);

  const onAdd = (imgSrc, name, price, count, id) => {
    const duplicateIndex = cartItems.findIndex((e) => e.id === id);
    if (duplicateIndex === -1) {
      setCartItems([
        ...cartItems,
        {
          imgSrc,
          name,
          price,
          count,
          id,
        },
      ]);
    } else {
      const oldCount = cartItems[duplicateIndex].count;
      const updatedCartItem = {
        ...cartItems[duplicateIndex],
        count: oldCount + count,
      };
      setCartItems([
        ...cartItems.slice(0, duplicateIndex),
        updatedCartItem,
        ...cartItems.slice(duplicateIndex + 1),
      ]);
    }
  };
  const onRemove = (id) => {
    setCartItems(cartItems.filter((c) => c.id !== id));
  };
  const clearCart = () => {
    setCartItems([]);
  };
  const onChange = (id, newCount) => {
    const targetIndex = cartItems.findIndex((e) => e.id === id);
    const target = cartItems[targetIndex];
    setCartItems([
      ...cartItems.slice(0, targetIndex),
      {
        ...target,
        count: newCount,
      },
      ...cartItems.slice(targetIndex + 1),
    ]);
  };
  return (
    <>
      <MainNavbar cartCount={cartCount} />
      <Outlet
        context={{ products, onAdd, cartItems, onRemove, clearCart, onChange }}
      />
    </>
  );
}

export default App;
