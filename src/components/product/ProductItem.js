import React from "react";
import { Link } from "react-router-dom";
import classes from "./ProductItem.module.css";

const ProductItem = ({ product }) => {
  const { id, title, image, price, category } = product;
  return (
    <div className={classes.itemContainer}>
      <Link to={`/product/${id}`}>
        <div className={classes["card-container"]}>
          <div className={classes["card-image"]}>
            <img src={image} alt={title} />
          </div>
          <div className={classes["card-descriptions"]}>
            <div className={classes["card-desc-title"]}>{title}</div>
            <div className={classes["card-desc-price"]}>$ {price}</div>
            <div className={classes["card-desc-categoria"]}>{category}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
