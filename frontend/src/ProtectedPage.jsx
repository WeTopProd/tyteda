import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ isActive }) {
  return isActive ? <Navigate to="/home" /> : <Navigate to="/login" />;
}

