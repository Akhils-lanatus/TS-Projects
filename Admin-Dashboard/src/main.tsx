import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { createTheme, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
const theme = createTheme({
  palette: {
    primary: {
      main: "#254061",
    },
  },
});
createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
