import React from "react";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children })=> {
  const getToken = localStorage.getItem("token");
  if (getToken) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default PrivateRoute;