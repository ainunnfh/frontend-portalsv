import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import ErrorPage from "./routes/error-page";

import HaloPage from "./pages/Halo.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import DetailApp from "./pages/DetailApp.tsx";
import AdminPanel from "./pages/AdminPanel.tsx";
import DetailProdi from "./pages/DetailProdi.tsx";
import AdminDetailApp from "./pages/AdminDetailApp.tsx";
import ProgramStudi from "./pages/ProgramStudi.tsx";
import TambahProdi from "./pages/TambahProdi.tsx";

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
  {
    path: "/detailprodi",
    element: <DetailProdi />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admindetailapp",
    element: <AdminDetailApp />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/programstudi",
    element: <ProgramStudi />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tambahprodi",
    element: <TambahProdi />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
