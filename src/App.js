import React from "react";
import { Routes, Route, Link } from "react-router-dom"
import Courses from "./pages/courses";
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar h-18 w-full">
        <ul className="flex justify-start p-2 ml-8">
          <li className="p-2 ml-3">
            <Link to={"/courses"}>Courses</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/courses" element={<Courses />} />
      </Routes>

    </div >
  );
}

export default App;
