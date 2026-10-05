import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  VehicleProvider
} from "./context/VehicleContext.jsx";
import "./index.css";
ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <VehicleProvider>
      <App />
    </VehicleProvider>
  </React.StrictMode>
);