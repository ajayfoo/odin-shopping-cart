import { useRouteError } from "react-router-dom";
import classes from "./ErrorPage.module.css";
export default function ErrorPage() {
  const error = useRouteError();
  return <p className={classes.error}>{error.statusText || error.message}</p>;
}
