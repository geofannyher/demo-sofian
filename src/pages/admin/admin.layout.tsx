import { useState } from "react";
import DashboardAdmin from "./dashboard";
import Sidebar from "./sidebar";

const AdminLayout = () => {
  const [open] = useState(false);
  return (
    <>
      <Sidebar openSide={open} />
      <DashboardAdmin />
    </>
  );
};

export default AdminLayout;
