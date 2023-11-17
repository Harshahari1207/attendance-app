import React, { useState } from "react";
import StudentLogin from "./studentLogin";
import TeacherLogin from "./teacherLogin";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [showStudentForm, setShowStudentForm] = useState(false);
  const [showTeacherForm, setShowTeacherForm] = useState(false);

  const openStudentForm = () => {
    console.log("Admin")
    setShowStudentForm(true);
    setShowTeacherForm(false);
  };

  const openTeacherForm = () => {
    console.log("Teacher");
    setShowStudentForm(false);
    setShowTeacherForm(true);
  };

  return (
    <div className="nav bg-red">
      <div className="nav-heading">
        <h1>Attendance-App</h1>
      </div>
      <div className="nav-buttons">
        <button type="button" className="admin-nav-btn" onClick={openTeacherForm}>
        <Link to="/teacher_login">Teacher</Link>
        </button>
        <button type="button" className="admin-nav-btn" onClick={openStudentForm}>
          <Link to="/student_login">Student</Link>
        </button>
      </div>
      {showStudentForm && <StudentLogin />}
      {showTeacherForm && <TeacherLogin />}
    </div>
  );
};
