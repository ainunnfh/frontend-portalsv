import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import ErrorPage from "./routes/error-page";

import HaloPage from "./pages/Halo.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import DetailApp from "./pages/DetailApp.tsx";
import AdminPanel from "./pages/AdminPanel.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <div>Login di sini</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/halo",
    element: <HaloPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/halo/:slug",
    element: <HaloPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/detailApp/:appId",
    element: <DetailApp />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/AdminPanel",
    element: <AdminPanel />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
