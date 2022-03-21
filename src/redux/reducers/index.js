import { combineReducers } from "redux";
import productReducer from "./productReducer";

const rootRecuders = combineReducers({
  allProducts: productReducer,
});

export default rootRecuders;
