import { createStore, applyMiddleware } from "redux";
import rootRecuders from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const configureStore = (initialState) => {
  return createStore(
    rootRecuders,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
};

export default configureStore;
