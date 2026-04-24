import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ allowedRoles }) => {
    const user = JSON.parse(localStorage.getItem("user"));

    // ❌ Not logged in
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    // ❌ Role not allowed
    if (allowedRoles && !allowedRoles.includes(user.usertype)) {
        return <Navigate to="/login" replace />;
    }

    // ✅ Allowed
    return <Outlet />;
};