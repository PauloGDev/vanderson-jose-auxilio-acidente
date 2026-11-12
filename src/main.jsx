import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { AppShell } from "./shared/layout/AppShell";
import { HomePage } from "./modules/home/pages/HomePage";
import { applyBrand } from "./core/theme/applyBrand";
import { appConfig } from "./config/app.config";
import "./styles/index.css";

applyBrand(appConfig.brand);

hydrateRoot(document.getElementById("root"),
  <StrictMode><AppShell><HomePage /></AppShell></StrictMode>,
);
