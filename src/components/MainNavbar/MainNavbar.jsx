import classes from "./MainNavbar.module.css";

export default function MainNavbar() {
  return (
    <nav className={classes["main-nav"]}>
      <a href="/">Home</a>
      <a href="shop">Shop</a>
    </nav>
  );
}
