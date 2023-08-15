import React from "react";
import { Link } from "react-router-dom";

const TeacherLogin = () => {
  return (
    <div className="teacher-login">
      <div className="teacher-login-form">
        <h2>Teacher Login</h2>
        <form>
          <div className="email-div">
            <label for="email">Email</label>
            <input type="email" id="email"></input>
          </div>
          <div className="password-div">
            <label for="password">Password</label>
            <input type="password" id="password"></input>
          </div>
          <button type="submit" id="btn">Login</button>
          <button type="button" id="btn">
            <Link to="/">Exit</Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default TeacherLogin;
