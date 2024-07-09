import App from "./App";
import Home from "./components/Home/Home";
import ErrorPage from "./ErrorPage/ErrorPage";
import Cart from "./components/Cart/Cart";

const getRoutes = () => {
  return [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home /> },
        { path: "cart", element: <Cart /> },
      ],
    },
  ];
};

export default getRoutes;
