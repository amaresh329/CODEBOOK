import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { FilterProvider } from "./context";
import "./index.css";
import App from "./App";
import { ScrollToTop } from "./components";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <FilterProvider >
        <ScrollToTop />
        <App />
      </FilterProvider>
    </Router>
  </React.StrictMode>
);
