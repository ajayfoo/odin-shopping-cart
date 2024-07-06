import { Link } from "react-router-dom";
import classes from "./MainNavbar.module.css";

export default function MainNavbar() {
  return (
    <nav className={classes["main-nav"]}>
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
}
