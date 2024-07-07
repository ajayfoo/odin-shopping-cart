import App from "./App";
import Home from "./components/Home/Home";
import ErrorPage from "./ErrorPage/ErrorPage";
import Cart from "./components/Cart/Cart";

const getRoutes = (products) => {
  return [
    {
      path: "/",
      element: <App products={products} />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home /> },
        { path: "cart", element: <Cart /> },
      ],
    },
  ];
};

export default getRoutes;
