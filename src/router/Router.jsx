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
import UserRoutesAlt from "../control-routes/UserRoutesAlt";
import DashboardLayout from "../layout/DashboardLayout";
import UserRoutes from "../control-routes/UserRoutes";
import DashboardHome from "../pages/dashboard/DashboardHome";
import AdminRoutes from "../control-routes/AdminRoutes";
import AdminLayout from "../layout/AdminLayout";
import AdminHome from "../pages/admin/AdminHome";
import ContractDetails from "../pages/admin/ContractDetails";
import DashboardContractDetails from "../pages/dashboard/DashboardContractDetails";
import CookiePolicy from "../pages/CookiePolicy";
import ResetPassword from "../pages/ResetPassword";

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
        path: '/cookie-policy',
        element: <CookiePolicy />
      },
      {
        path: '/submit-contract',
        element: <SubmitContract />
      },
      {
        path: '/login',
        element: <UserRoutesAlt><Login /></UserRoutesAlt>
      },
      {
        path: '/reset-password/:token',
        element: <UserRoutesAlt><ResetPassword /></UserRoutesAlt>
      }
    ]
  },
  {
    path: '/dashboard',
    element: <UserRoutes><DashboardLayout /></UserRoutes>,
    children: [
      {
        path: '/dashboard',
        element: <DashboardHome />
      },
      {
        path: '/dashboard/contract/:id',
        element: <DashboardContractDetails />
      }
    ]
  },
  {
    path: '/admin',
    element: <AdminRoutes><AdminLayout /></AdminRoutes>,
    children: [
      {
        path: '/admin',
        element: <AdminHome />
      },
      {
        path: '/admin/contracts/:id',
        element: <ContractDetails />
      }
    ]
  },
  {
    path: '/contract-pdf',
    element: <ContractPDF />
  }
])
