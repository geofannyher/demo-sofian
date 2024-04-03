import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { getSession } from "../shared/Session";
import { notification } from "antd";

const MainLayout = () => {
  const navigate = useNavigate();
  const landing = location?.pathname == "/signin";
  const [api] = notification.useNotification();
  const token = getSession();

  useEffect(() => {
    if (!token && !landing) {
      const openNotification = () => {
        notification.error({ message: "Sorry, you have to login first!" });
      };
      openNotification();
      navigate("/");
    }
  }, [token, landing, api, navigate]);
  return <Outlet />;
};

export default MainLayout;
