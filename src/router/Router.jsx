import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Invest from "../pages/Invest";
import Imprint from "../pages/Imprint";
import ProfitDetails from "../pages/ProfitDetails";
import Contract from "../pages/Contract";
import ContractPDF from "../pages/ContractPDF";
import SubmitContract from "../pages/SubmitContract";
import Login from "../pages/Login";

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
        path: '/contract',
        element: <Contract />
      },
      {
        path: '/imprint',
        element: <Imprint />
      },
      {
        path: '/submit-contract',
        element: <SubmitContract />
      },
      {
        path: '/login',
        element: <Login />
      }
    ]
  },
  {
    path: '/contract-pdf',
    element: <ContractPDF />
  }
])
