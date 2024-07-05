import { Outlet } from "react-router-dom";
import MainNavbar from "./components/MainNavbar/MainNavbar";

function App() {
  return (
    <>
      <MainNavbar />
      <Outlet />
    </>
  );
}

export default App;
