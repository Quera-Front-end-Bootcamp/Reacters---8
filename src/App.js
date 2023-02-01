import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Courses from "./pages/courses";
import Course from './pages/course/course';
import LoginPage from "./pages/account/Login";
import ReigsterPage from "./pages/account/Register";
import AccountPage from "./pages/account/Index";
import AboutUs from "./components/Footer/AboutUs";

import './App.css';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<ReigsterPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/course" element={<Course />} />
        <Route path="./courses" element={<Courses />}></Route>
        <Route path="./aboutus" element={<AboutUs />}></Route>

      </Routes>
    </div>
  );
}

export default App;
