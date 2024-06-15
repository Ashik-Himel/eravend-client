import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Invest from "../pages/Invest";
import Imprint from "../pages/Imprint";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/invest',
        element: <Invest />
      },
      {
        path: '/imprint',
        element: <Imprint />
      }
    ]
  }
])
