import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";

const TeacherLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  // const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Fetch teacher data based on the entered username
      const teachersdataRef = collection(db, "teachersData");
      const querySnapshot = await getDocs(teachersdataRef);
      let teacherFound = false;
      const teachersData = [];
      querySnapshot.forEach((doc) => {
        teachersData.push(doc.data());
      });

      const foundTeacher = teachersData[0].teachers.find((teacher) => {
        // console.log(teacher.password);
        if (teacher.username === username && teacher.passwordHash === password)
          return true;
        else return false;
      });
      // console.log(foundTeacher);
      if (!foundTeacher) {
        setError("Teacher not found with the entered username or password.");
      } else {
        setError("");
        window.location.href = `/teacher/${username}`;
        console.log("SignIn succussfull");
      }
    } catch (error) {
      console.error("Login Error:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="teacher-login">
      <div className="teacher-login-form">
        <h2>Teacher Login</h2>
        <form onSubmit={handleLogin}>
          <div className="username-div">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="password-div">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit" id="btn">
            Login
          </button>
          <button type="button" id="btn">
            <Link to="/">Exit</Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default TeacherLogin;
