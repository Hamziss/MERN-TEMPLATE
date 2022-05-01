// * Changed the structure of index.js since reactDOM is no longer supported in react v18
import React, { StrictMode } from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";

import { App } from "./containers/App";
import { store } from "./containers/App/store";
import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
