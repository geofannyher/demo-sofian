import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { notification } from "antd";
import { AlertDanger, AlertSuccess } from "../../components/notification";
const Login = () => {
  const [msg, setMsg] = useState(0);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [, context] = notification.useNotification();
  const navigate = useNavigate();

  const handleSubmit = async (event: any) => {
    setLoading(true);
    event.preventDefault();
    const email = import.meta.env.VITE_APP_EMAIL;
    const pass = import.meta.env.VITE_APP_PASS;
    if (event?.target[0]?.value === email && event.target[1]?.value == pass) {
      navigate("/chat");
      localStorage.setItem("usermail", event?.target[0]?.value);
      setLoading(false);
    } else {
      setLoading(false);
      setMsg(1);
      setTimeout(() => {
        setMsg(0);
      }, 1000);
    }
  };

  return (
    <>
      {context}
      {msg == 0 ? null : msg == 1 ? <AlertDanger /> : <AlertSuccess />}
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium leading-6 text-main">
            Email
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              required
              className="block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium leading-6 text-main">
              Password
            </label>
          </div>
          <div className="relative mt-2">
            <input
              id="password"
              name="password"
              type={show ? "text" : "password"}
              required
              className="block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-3"
              onClick={() => setShow(!show)}
            >
              {show ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        <div>
          <button
            disabled={loading}
            type="submit"
            className="flex w-full justify-center rounded-md bg-mainColor px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-hoverBtn transition duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {loading ? "loading..." : "Masuk"}
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
