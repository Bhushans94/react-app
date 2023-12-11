import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

// Custom components

import App from './App';
import AppLayout from './layout/AppLayout';
import Product from './pages/product/Product';

// Global style

import './styles/global.css';

const router = createBrowserRouter([
  {
    path: '/', element: <AppLayout />, children: [
      { path: '/', element: <App /> },
      { path: '/pages', element: <App /> },
      { path: '/contact', element: <App /> },
      { path: '/about', element: <App /> },
      {
        path: '/product', children: [{
          path: ':productName', element: <Product />
        }]
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
