import { Outlet } from "react-router-dom";
import MainNavbar from "./components/MainNavbar/MainNavbar";

function App() {
  const products = [
    {
      name: "White T-Shirt",
      price: 200,
      imgSrc: "src/images/t-shirt.jpg",
      id: 123,
    },
  ];
  const onAdd = () => console.log("on add");
  return (
    <>
      <MainNavbar />
      <Outlet context={{ products, onAdd }} />
    </>
  );
}

export default App;
