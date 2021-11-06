import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.sass";
import App from "./App";
import { AuthenticationProvider } from "state/AuthenticationContext";
import { DataProvider } from "state/DataContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthenticationProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </AuthenticationProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
