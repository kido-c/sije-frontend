import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import GlobalStyles from "./styles/globalStyle";
import GlobalFonts from "./styles/globalFont.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyles />
    <GlobalFonts />
    <App />
  </StrictMode>
);
