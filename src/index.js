import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ContextProvider } from "./store/context";
import LoginPage from "./pages/account/Login";
import ReigsterPage from "./pages/account/Register";
import AccountPage from "./pages/account/Index";


const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <ReigsterPage />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
