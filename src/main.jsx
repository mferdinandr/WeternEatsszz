import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/index.jsx';
import OurFoods from './pages/ourFoods.jsx';
import ErrorPage from './pages/ErrorPages.jsx';
import ContactUs from './pages/ContactUs.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Router Error</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: '/home',
    element: <MainPage></MainPage>,
  },
  {
    path: '/foods',
    element: <OurFoods></OurFoods>,
  },
  {
    path: '/contactus',
    element: <ContactUs></ContactUs>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
