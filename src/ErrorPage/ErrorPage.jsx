import { useRouteError } from "react-router-dom";
import classes from "./ErrorPage.module.css";
import { Link } from "react-router-dom";
export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div className={classes.error}>
      <p>Page {error.statusText || error.message}</p>
      <Link to="/">Go To Home</Link>
    </div>
  );
}
