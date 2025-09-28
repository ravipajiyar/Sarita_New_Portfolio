import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Scroll restoration component
const ScrollToTop = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ScrollToTop />
    <App />
  </React.StrictMode>
);
