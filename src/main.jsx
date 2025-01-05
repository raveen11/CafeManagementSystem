import { createRoot } from "react-dom/client";
import App from "./containers/App/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProviderWrapper } from "./ThemeProvider";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProviderWrapper>
      <App />
    </ThemeProviderWrapper>
  </BrowserRouter>
);
