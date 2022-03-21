import React from "react";
import { Link } from "react-router-dom";
import classes from "./PageNotFound.module.css";

const PageNotFound = () => {
  return (
    <div className={classes.container}>
      <h1>404</h1>
      <p>Page Not Found</p>
      <Link to="/">Back to Home Page</Link>
    </div>
  );
};

export default PageNotFound;
