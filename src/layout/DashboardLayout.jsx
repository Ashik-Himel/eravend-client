import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import { Toaster } from "react-hot-toast";

export default function DashboardLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  );
}