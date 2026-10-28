
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
 import Login from "./assets/LogIn/Login";
import Register from "./assets/Register/Register";
import ForgotPassword from "./assets/forgotPassword/ForgotPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
