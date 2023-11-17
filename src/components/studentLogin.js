import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  getDocs,
  query,
  where,
  collection,
  arrayContains,
} from "firebase/firestore";
import { auth, db } from "../firebaseConfig";

const StudentLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  // const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Fetch teacher data based on the entered username
      const studentsdataRef = collection(db, "studentsData");
      const querySnapshot = await getDocs(studentsdataRef);
      let studentFound = false;
      const studentsData = [];
      querySnapshot.forEach((doc) => {
        studentsData.push(doc.data());
      });
      // console.log(studentsData[0].students);
      const foundStudent = studentsData[0].students.find((student) => {
        console.log(student.passwordHash + " " + password);
        if (student.username === username && student.password === password)
          return true;
        else return false;
      });
      // console.log(foundTeacher);
      if (!foundStudent) {
        setError("Student not found with the entered username or password.");
      } else {
        setError("");
        window.location.href = `/student/${username}`;
        console.log("SignIn succussfull");
      }
    } catch (error) {
      console.error("Login Error:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="student-login">
      <div className="student-login-form">
        <h2>Student Login</h2>
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

export default StudentLogin;
