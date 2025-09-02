import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './Dashboard/dashboard.tsx';
import App from './App.tsx';
import Analytics from './Dashboard/pages/Analytics.tsx';
import AddProduct from './Dashboard/pages/Add Product/addProduct.tsx';
import Productlist from './Dashboard/pages/Product List/productlist.tsx';

const router = createBrowserRouter([
 {
    path: "/",
    element: <App />, 
    children: [
      {
        path: "/",
        element: <Dashboard />,
        children: [
          { index: true, element: <Analytics /> },
          { path: "addProduct", element: <AddProduct /> },
          { path: "Productlist", element: <Productlist /> },


  
        ],
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
