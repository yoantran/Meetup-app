import React from "react";
import ReactDOM from "react-dom";
import { FavoritesContextProvider } from "./store/favorites-context";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <FavoritesContextProvider>
    <App />;
  </FavoritesContextProvider>,
  document.getElementById("root")
);
