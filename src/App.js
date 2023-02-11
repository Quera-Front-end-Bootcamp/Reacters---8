import React from "react";
import { Routes, Route } from "react-router-dom";
import Courses from "./pages/courses/courses";
import Course from "./pages/course/course";
import LoginPage from "./pages/login/Login";
import ReigsterPage from "./pages/register/Register";
import Account from "./pages/account/Account";
import Homepage from "./pages/homepage/homepage";
import Wrapper from "./components/Wrapper/Wrapper";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Wrapper flag={true} element={<Homepage />} />} />
        <Route path="/login" element={<Wrapper flag={false} element={<LoginPage />} />} />
        <Route path="/register" element={<Wrapper flag={false} element={<ReigsterPage />} />} />
        <Route path="/account" element={<Wrapper flag={true} element={<Account />} />} />
        <Route path="/course/:id" element={<Wrapper flag={true} element={<Course />} />} />
        <Route path="/courses" element={<Wrapper flag={false} className="coursesPage" element={<Courses />} />} />
      </Routes>
    </div >
  );
}

export default App;