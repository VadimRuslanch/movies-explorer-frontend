import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ isLoggedIn, element }) {
    if (isLoggedIn) {
        return element
    } else {
        return <Navigate to="/" replace />
    }
}