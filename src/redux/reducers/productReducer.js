import InitialStates from "../initialStates";
import { actionTypes } from "../constants/actionTypes";

const productReducer = (state = InitialStates, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_PRODUCTS:
      return { ...state, products: [...payload] };

    case actionTypes.ADD_PRODUCT:
      return [...state, payload.product];

    case actionTypes.REMOVE_PRODUCT:
      return state.products.find(
        (product) => product.id !== payload.product.id
      );

    case actionTypes.GET_PRODUCT:
      let selctedProduct = state.products.find(
        (product) => product.id === parseInt(payload)
      );
      return { ...state, product: { ...selctedProduct } };

    default:
      return state;
  }
};

export default productReducer;
