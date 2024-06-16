import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Invest from "../pages/Invest";
import Imprint from "../pages/Imprint";
import ProfitDetails from "../pages/ProfitDetails";

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
        path: '/profit-details',
        element: <ProfitDetails />
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
