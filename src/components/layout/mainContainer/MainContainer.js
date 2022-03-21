import React, { Fragment } from "react";
import classes from "./MainContainer.module.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../header/Header";

const MainContainer = (props) => {
  return (
    <Fragment>
      <Router>
        <Header />
        <main className={classes.container}>{props.children}</main>
      </Router>
    </Fragment>
  );
};

export default MainContainer;
