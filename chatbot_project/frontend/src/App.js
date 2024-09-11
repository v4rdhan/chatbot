// import logo from "./logo.svg";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import PrivateRoute from "./PrivateRoute";
import "./App.css";
import Login from "./login/Login";
import Signup from "./Signup/Signup";
import Chatbot from "./chatbot/Chatbot";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="chatbot" element={<Chatbot />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
