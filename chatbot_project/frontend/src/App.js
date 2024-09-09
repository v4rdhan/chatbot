// import logo from "./logo.svg";
import { Routes, Route, Router, BrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./login/Login";
import Signup from "./Signup/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
