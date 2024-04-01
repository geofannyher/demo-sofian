import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatPage from "./pages/chat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<ChatPage />} />Í
      </Routes>
    </BrowserRouter>
  );
}

export default App;
