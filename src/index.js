import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { StateContextProvider } from "./DataContext/StateProvider";
import { reducer, initialState } from "./DataContext/reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateContextProvider reducer={reducer} initialState={initialState}>
      <App />
    </StateContextProvider>
  </React.StrictMode>
);
