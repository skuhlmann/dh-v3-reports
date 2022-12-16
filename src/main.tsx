import { DHConnectProvider } from "@daohaus/connect";
import { HausThemeProvider } from "@daohaus/ui";
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Routes } from "./Routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <HausThemeProvider>
        <DHConnectProvider>
          <Routes />
        </DHConnectProvider>
      </HausThemeProvider>
    </HashRouter>
  </React.StrictMode>
);

// home - enter your dao url and redirect
// dao specific routing
// useQuery for proposals and members
// could start without filtering and fetch all - no pagination
// simplest display table
// csv download
// stretch:
// // select columns
// // filtering: write it in a field?
// // ordering: select field and direction
