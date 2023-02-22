import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useStateContext from "../Hooks/useStateContext";

export default function Authenticate() {
    const { context } = useStateContext();
    const isAuthenticated = context.id !== 0;

    return (
        isAuthenticated ? <Outlet /> : <Navigate to="/" replace />
    );
}