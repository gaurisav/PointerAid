import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { Toaster } from "react-hot-toast";

import { ForecastProvider } from "./context/ForecastContext";
import { ColorModeProvider } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ColorModeProvider>
      <ForecastProvider>
        <Toaster position="top-right" />

        <App />
      </ForecastProvider>
    </ColorModeProvider>
  </React.StrictMode>
);

