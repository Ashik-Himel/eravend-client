import { Toaster } from "react-hot-toast";
import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div>
      <div>
      <Header />
      <Outlet />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
    </div>
  );
}