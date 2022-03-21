import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/configureStore";

const storeValue = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={storeValue}>
      <App />
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
