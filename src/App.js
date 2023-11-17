import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { HomePage } from "./components/homePage";
import TeacherLogin from "./components/teacherLogin";
import StudentLogin from "./components/studentLogin";
import Teacher from "./components/teacher";
import TeacherEce from "./components/teacherEce";
import TeacherCse from "./components/teacherCse";
import AddData from "./components/addData";
import Student from "./components/student";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/student_login" element={<StudentLogin />} />
        <Route path="/teacher_login" element={<TeacherLogin />} />
        <Route path="/teacher/:username" element={<Teacher />} />
        <Route path="/student/:username" element={<Student />} />
        <Route path="/teacher/:username/ece" element={<TeacherEce />} />
        <Route path="/teacher/:username/cse" element={<TeacherCse />} />
        <Route path="/add_data" element={<AddData />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;
