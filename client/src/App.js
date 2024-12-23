//import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import MyBooking from "./pages/MyBooking";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          {/* Define routes*/}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mybooking" element={<MyBooking />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
