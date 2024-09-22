import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import GlobalStyles from "./styles/globalStyle";
import GlobalFonts from "./styles/globalFont.ts";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <GlobalFonts />
      <App />
    </ThemeProvider>
  </StrictMode>
);
