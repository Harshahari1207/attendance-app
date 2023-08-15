import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import { HomePage } from "./components/homePage";
import AdminLogin from "./components/adminLogin";
import TeacherLogin from "./components/teacherLogin";


function App() {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/teacher" element={<TeacherLogin />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;
