import { Navigate } from "react-router-dom";

export default function ProtectedPage() {

    const tokenTwo = localStorage.getItem('token');
  
    if (!tokenTwo) {

      return <Navigate to="/login" replace />;
      
    }
  
    return <p>This is a protected page.</p>;

  }
  