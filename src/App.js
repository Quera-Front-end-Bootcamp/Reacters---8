import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Courses from "./pages/courses/courses";
import Course from './pages/course/course';
import LoginPage from "./pages/account/Login";
import ReigsterPage from "./pages/account/Register";
import AccountPage from "./pages/account/Index";
// import AboutUs from "./components/Footer/AboutUs";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<ReigsterPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/course/:id" element={<Course />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </div >
  );
}

export default App;