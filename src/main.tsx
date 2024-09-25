import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import GlobalStyles from "./styles/globalStyle";
import GlobalFonts from "./styles/globalFont.ts";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme.ts";
import PortalModal from "./components/modal/components/PortalModal.tsx";
import { ModalProvider } from "./contexts/ModalProvider.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <GlobalFonts />
          <PortalModal />
          <App />
        </ThemeProvider>
      </ModalProvider>
    </QueryClientProvider>
  </StrictMode>
);
