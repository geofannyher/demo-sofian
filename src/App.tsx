import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatPage from "./pages/chat";
import AuthLayout from "./pages/auth/authlayout";
import Login from "./pages/auth/login";
import MainLayout from "./pages/main.layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
        </Route>
        <Route path="/" element={<MainLayout />}>
          <Route path="chat" element={<ChatPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
