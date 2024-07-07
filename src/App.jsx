import { Outlet } from "react-router-dom";
import MainNavbar from "./components/MainNavbar/MainNavbar";
import PropTypes from "prop-types";

function App({ products }) {
  const onAdd = () => console.log("on add");
  return (
    <>
      <MainNavbar />
      <Outlet context={{ products, onAdd }} />
    </>
  );
}

App.propTypes = {
  products: PropTypes.array.isRequired,
};

export default App;
