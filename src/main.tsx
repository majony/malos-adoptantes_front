import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import "bootstrap/dist/css/bootstrap.css";

//SBAdmin2 Style
//import "./styles/scss/sb-admin-2.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
