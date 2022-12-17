import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import { HausThemeProvider } from "@daohaus/ui";
import { DHConnectProvider } from "@daohaus/connect";

import { Routes } from "./Routes";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <HausThemeProvider>
        <DHConnectProvider>
          <QueryClientProvider client={queryClient}>
            <Routes />
          </QueryClientProvider>
        </DHConnectProvider>
      </HausThemeProvider>
    </HashRouter>
  </React.StrictMode>
);

// parse out bs data or truncate
// csv download
// stretch:
// // select columns
// // filtering: write it in a field?
// // ordering: select field and direction
