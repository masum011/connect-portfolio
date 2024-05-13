import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CircularProgress, Container } from "@mui/material";
import Home from "./pages/Home";

// lazy loading
const Products = React.lazy(() => import("./pages/Products"));
const Construction = React.lazy(() => import("./pages/Construction"));
const Event = React.lazy(() => import("./pages/Event"));
const Petcare = React.lazy(() => import("./pages/Petcare"));
const Health = React.lazy(() => import("./pages/Health"));
const Management = React.lazy(() => import("./pages/Management"));

// routes

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/product",
    element: <Products />,
  },
  {
    path: "/construction",
    element: <Construction />,
  },
  {
    path: "/event",
    element: <Event />,
  },
  {
    path: "/petcare",
    element: <Petcare />,
  },
  {
    path: "/health",
    element: <Health />,
  },
  {
    path: "/management",
    element: <Management />,
  },
]);




ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense fallback={<div id="loader"><CircularProgress size={100}/></div>}>
    <Container maxWidth='md'>
    <RouterProvider router={router} />
    </Container>
  </Suspense>
);
