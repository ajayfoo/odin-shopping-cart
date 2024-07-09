import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import getRoutes from "./routes";
import { getAllProducts } from "./utils";

async function init() {
  const allProducts = await getAllProducts();
  const normalizedProducts = allProducts.map((p) => ({
    id: p.id,
    name: p.title,
    imgSrc: p.image,
    price: p.price,
  }));
  const router = createBrowserRouter(getRoutes(normalizedProducts));
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

init();
