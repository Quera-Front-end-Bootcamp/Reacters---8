import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";

import Course from './pages/course/course';
import LoginPage from "./pages/account/Login";
import ReigsterPage from "./pages/account/Register";
import AccountPage from "./pages/account/Index";

function App() {
  return (
    <div className="App">
      <Course />
      <Routes>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/register" element={<ReigsterPage/>}/>
        <Route path="/account" element={<AccountPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
