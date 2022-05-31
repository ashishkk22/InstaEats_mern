import React from "react";
import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";

const ProtectedRouteOrder = () => {
  const { authenticated } = useSelector(state => ({ ...state.auth }));
  return <>{!authenticated && <Navigate to="signin" />}</>;
};

export default ProtectedRouteOrder;
