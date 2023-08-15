import React, { useState } from "react";
import AdminLogin from "./adminLogin";
import TeacherLogin from "./teacherLogin";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [showAdminForm, setShowAdminForm] = useState(false);
  const [showTeacherForm, setShowTeacherForm] = useState(false);

  const openAdminForm = () => {
    console.log("Admin")
    setShowAdminForm(true);
    setShowTeacherForm(false);
  };

  const openTeacherForm = () => {
    console.log("Teacher");
    setShowAdminForm(false);
    setShowTeacherForm(true);
  };

  return (
    <div className="nav bg-red">
      <div className="nav-heading">
        <h1>Attendance-App</h1>
      </div>
      <div className="nav-buttons">
        <button type="button" className="admin-nav-btn" onClick={openAdminForm}>
          <Link to="/admin">Admin</Link>
        </button>
        <button type="button" className="admin-nav-btn" onClick={openTeacherForm}>
        <Link to="/teacher">Teacher</Link>
        </button>
      </div>
      {showAdminForm && <AdminLogin />}
      {showTeacherForm && <TeacherLogin />}
    </div>
  );
};
