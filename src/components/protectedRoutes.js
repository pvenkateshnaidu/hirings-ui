import React from 'react';
import { Navigate } from 'react-router-dom';
import authService from '../services/authservice';

const ProtectedRoute = ({ children, allowedRoles, redirectTo }) => {

    const user = authService.getCurrentUser();

    if (!user) {
      return <Navigate to="/login" />;
    }
  
    if (!allowedRoles.includes(user.role)) {
      return <Navigate to={redirectTo || "/unauthorized"} />;
    }
  
    return children;
  };
  
  export default ProtectedRoute;