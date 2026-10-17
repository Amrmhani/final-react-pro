
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./assets/LogIn/Login";
import Register from "./assets/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
