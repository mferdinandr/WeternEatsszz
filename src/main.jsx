import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/index.jsx';
import OurFoods from './pages/ourFoods.jsx';
import ErrorPage from './pages/ErrorPages.jsx';
import ContactUs from './pages/ContactUs.jsx';
import Help from './pages/Help.jsx';
import Cart from './pages/Cart.jsx';

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
  {
    path: '/help',
    element: <Help></Help>,
  },
  {
    path: '/cart',
    element: <Cart></Cart>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
