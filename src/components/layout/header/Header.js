import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes["div-logo"]}>
          <Link to="/">FAKE SHOP</Link>
        </div>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink activeclassname={classes.active} to="/cart">
                <FontAwesomeIcon icon={faCartShopping} />
                Cart
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
};

export default Header;
