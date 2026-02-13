import React from "react";
import ReactDOM from "react-dom/client";
import emailjs from "@emailjs/browser";
import App from "./App";
import "./index.css";

// Initialize EmailJS
emailjs.init(import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);

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
