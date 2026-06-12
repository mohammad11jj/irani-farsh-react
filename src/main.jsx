import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./app/store.js";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <Toaster
  position="top-center"
  toastOptions={{
    duration: 2000,
    style: {
      borderRadius: "12px",
      background: "#fff",
      color: "#111",
      fontFamily: "Yekan",
    },
  }}
/>
    </Provider>
  </StrictMode>,
);
