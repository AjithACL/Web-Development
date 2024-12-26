import React from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import Studies from './components/Studies';
import Dataset from './components/Dataset';
import Settings from './components/Settings';
import Study from './components/Study';
import Datasets from './components/Datasets';
import Graph from './components/Graph';
import Login from './components/Login';
import Register from './components/Register';
import ProtectedRoute from './components/ProtectedRoute'; // ProtectedRoute to secure the dashboard
import Widgets from './components/widgets';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: 'studies',
        element: <Studies />,
        children: [
          { path: 'study', element: <Study /> },
          { path: 'datasets', element: <Datasets /> },
          { path: 'graph', element: <Graph /> },
          {path:'widgets', element:<Widgets/>}
        ],
      },
      {
        path: 'dataset',
        element: <Dataset />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
