import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";

const Student = () => {
  const { username } = useParams();
  const [foundStudentData, setFoundStudentData] = useState(null);
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch student data based on the entered username
        const studentsdataRef = collection(db, "studentsData");
        const querySnapshot = await getDocs(studentsdataRef);

        let studentFound = false;
        const studentsData = [];
        querySnapshot.forEach((doc) => {
          studentsData.push(doc.data());
        });

        const foundStudent = studentsData[0].students.find((student) => {
          if (student.username === username) {
            studentFound = true;
            return true;
          } else {
            return false;
          }
        });

        if (!studentFound) {
          console.log("student not found with the entered username.");
        } else {
          console.log("student found:", foundStudent.attendance);
          // Store the found student data in state
          setFoundStudentData(foundStudent);
          // Set students state here
          setAttendance(foundStudentData.attendance);
        }
      } catch (error) {
        console.error("Error fetching student data:", error);
        // Handle the error
      }
    };

    fetchData();
  }, [username]);
  //   console.log()
  return (
    <div className="student">
      <div className="studentMainHeading">
        <h2>Student Details</h2>
      </div>
      {foundStudentData ? (
        <div className="studentProfile">
          <div className="profileElement">
            <h3>Name : </h3>
            <p>{foundStudentData.name}</p>
          </div>
          <div className="profileElement">
            <h3>Roll Number : </h3>
            <p>{foundStudentData.rollNumber}</p>
          </div>
          <div className="profileElement">
            <h3>Email : </h3>
            <p>{foundStudentData.email}</p>
          </div>
          <div className="profileElement">
            <h3>Semester : </h3>
            <p>{foundStudentData.semester}</p>
          </div>
        </div>
      ) : (
        <p>Loading..</p>
      )}
      <div className="studentAttendanceDet">
        <div className="studentAttendanceDetHead">
          <h2>Attendance details</h2>
        </div>
        <div className="table">
          <div className="row">
            <div>
              <h3>Subject/Date</h3>
            </div>
            {attendance ? (
              attendance.map((att, indx) => {
                return (
                  <div key={indx}>
                    <h3>{att.date}</h3>
                  </div>
                );
              })
            ) : (
              <p>Loading..</p>
            )}
          </div>
          <div className="row">
            <div>
              <h3>C++</h3>
            </div>
            {attendance ? (
              attendance.map((att, indx) => {
                return (
                  <div key={indx}>
                    <p>{att.status}</p>
                  </div>
                );
              })
            ) : (
              <p>Loading..</p>
            )}
          </div>
          <div className="row">
            <div>
              <h3>Java</h3>
            </div>
            {attendance ? (
              attendance.map((att, indx) => {
                return (
                  <div key={indx}>
                    <p>{att.status}</p>
                  </div>
                );
              })
            ) : (
              <p>Loading..</p>
            )}
          </div>
          <div className="row">
            <div>
              <h3>DSA</h3>
            </div>
            {attendance ? (
              attendance.map((att, indx) => {
                return (
                  <div key={indx}>
                    <p>{att.status}</p>
                  </div>
                );
              })
            ) : (
              <p>Loading..</p>
            )}
          </div>
          <div className="row">
            <div>
              <h3>DBMS</h3>
            </div>
            {attendance ? (
              attendance.map((att, indx) => {
                return (
                  <div key={indx}>
                    <p>{att.status}</p>
                  </div>
                );
              })
            ) : (
              <p>Loading..</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Student;
