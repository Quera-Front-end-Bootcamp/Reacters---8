import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "./pages/courses/courses";
import Course from "./pages/course/course";
import LoginPage from "./pages/login/Login";
import ReigsterPage from "./pages/register/Register";
import Account from "./pages/account/Account";
import Homepage from "./pages/homepage/homepage";
import DashboardCourses from './pages/dashboard/dashboardCourses';
import DashboardStudents from './pages/dashboard/students';
import Wrapper from "./components/Wrapper/Wrapper";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import DashboardLayout from './components/dashboard/layout';

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
        <Route path="/dashboard" element={<PrivateRoute><DashboardLayout /></PrivateRoute>}>
          <Route  path="students" element={<DashboardStudents />}></Route>
          <Route path="news" element={<div>news</div>}></Route>
          <Route path="lessons" element={<div>lessons</div>}></Route>
          <Route path="courses" element={<DashboardCourses />}></Route>
          <Route index element={<Navigate to="courses" />}></Route>
        </Route>
      </Routes>
    </div >
  );
}

export default App;