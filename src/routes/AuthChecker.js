import { createContext, useEffect, useMemo, useState } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

const AuthChecker = props => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('accessToken');

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/signin');
    } else {
      navigate('/admin/dashboard');
    }
  }, []);

  return props.children;
  // return ()<Navigate to={route} />;
};

export default AuthChecker;
