import { Outlet } from "react-router-dom";
import MainNavbar from "./components/MainNavbar/MainNavbar";
import PropTypes from "prop-types";
import { useState } from "react";

function App({ products }) {
  const onAdd = () => console.log("on add");
  const [cartCount] = useState(0);
  return (
    <>
      <MainNavbar cartCount={cartCount} />
      <Outlet context={{ products, onAdd }} />
    </>
  );
}

App.propTypes = {
  products: PropTypes.array.isRequired,
};

export default App;
