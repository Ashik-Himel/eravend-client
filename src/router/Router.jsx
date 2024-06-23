import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Invest from "../pages/Invest";
import Imprint from "../pages/Imprint";
import ProfitDetails from "../pages/ProfitDetails";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Contract from "../pages/Contract";
import ContractPDF from "../pages/ContractPDF";

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
        path: '/privacy-policy',
        element: <PrivacyPolicy />
      }
    ]
  },
  {
    path: '/contract-pdf',
    element: <ContractPDF />
  }
])
