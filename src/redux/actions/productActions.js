import fakestoreapi from "../../api/fakeShopApi";
import { actionTypes } from "../constants/actionTypes";

export const fecthProducts = () => {
  return async (dispatch) => {
    const response = await fakestoreapi.get("/products");

    dispatch({ type: actionTypes.FETCH_PRODUCTS, payload: response.data });
  };
};

export const setProducts = (products) => {
  return { type: actionTypes.SET_PRODUCTS, payload: products };
};

export const addProducts = (product) => {
  return { type: actionTypes.ADD_PRODUCT, payload: product };
};

export const removeProducts = (product) => {
  return { type: actionTypes.REMOVE_PRODUCT, payload: product };
};

export const getProduct = (productId) => {
  return { type: actionTypes.GET_PRODUCT, payload: productId };
};
