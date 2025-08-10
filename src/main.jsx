import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import './index.css';

// Import Pages
import HomePage from './pages/HomePage.jsx';
import CollectionsPage from './pages/CollectionsPage.jsx';
import AdminPage from './pages/AdminPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/collections',
        element: <CollectionsPage />,
      },
      {
        path: '/admin',
        element: <AdminPage />, // ඔයා මේක පාවිච්චි කරන නිසා, උඩින් import කරන්නම ඕන
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);