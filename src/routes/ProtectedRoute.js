import { createContext, useEffect, useMemo, useState } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

const ProtectedRoute = props => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('accessToken');

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/signin');
    }
  }, []);

  return props.children;
};

export default ProtectedRoute;
