import * as React from 'react';
import * as ReactDom from 'react-dom/client';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  Routes,
} from 'react-router-dom';
import AuthChecker from './AuthChecker';
import SignIn from '../pages/signin/SignIn';
import Dashboard from '../pages/dashboard/Dashboard';
import NotFoundPage from '../pages/notfound/notfound';
import UnderConstruction from '../pages/underconstruction/underconstruction';
import AdminLayout from '../layouts/AdminLayout';
import ProtectedRoute from './ProtectedRoute';
import Student from '../pages/students/Student';
import Payment from '../pages/payment/Payment';
import Course from '../pages/courses/Courses';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthChecker />} />
      <Route
        path="signin"
        element={
          <AuthChecker>
            <SignIn />
          </AuthChecker>
        }
      />
      <Route
        path="admin/*"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="*" element={<UnderConstruction />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="students" element={<Student />} />
        <Route path="payment" element={<Payment />} />
        <Route path="course" element={<Course />} />
      </Route>
    </Routes>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthChecker />,
    children: [
      {
        path: 'signin',
        element: <SignIn />,
      },
      {
        path: 'admin',
        errorElement: <NotFoundPage />,
        children: [
          {
            path: 'dashboard',
            element: <Dashboard />,
          },
        ],
      },
    ],
  },
]);

export default AppRoutes;
