import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);

  const handleExit = () => {
    setIsVisible(false);
    navigate("/");
  };

  return (
    isVisible && (
      <div className="admin-login">
        <div className="admin-login-form">
          <h2>Admin Login</h2>
          <form>
            <div className="email-div">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div>
            <div className="password-div">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <button type="submit" id="btn">Login</button>
            <button type="button" onClick={handleExit} id="btn">
              Exit
            </button>
          </form>
        </div>
      </div>
    )
  );
};

export default AdminLogin;
