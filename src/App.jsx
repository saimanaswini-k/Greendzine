import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Employee from "./components/Employee/Employee";

export default function App() {
  const [logged, setLogged] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home logged={logged} />} />
        <Route path="/login" exact element={<Login setLogged={setLogged} />} />
        <Route path="/employee" element={<Employee logged={logged} />} />
      </Routes>
    </BrowserRouter>
  );
}
