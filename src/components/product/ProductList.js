import React, { useEffect } from "react";
import classes from "./ProductList.module.css";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../product/ProductItem";
import { fecthProducts } from "../../redux/actions/productActions";

const ProductList = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fecthProducts());
  }, [dispatch]);

  return (
    <div className={classes.container}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
