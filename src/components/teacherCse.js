import { useState, useEffect } from "react";
import {
  getDocs,
  query,
  where,
  collection,
  arrayContains,
} from "firebase/firestore";
import { auth, db } from "../firebaseConfig";
import { useParams } from "react-router-dom";
const TeacherCse = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const { username } = useParams();
  const [foundTeacherData, setFoundTeacherData] = useState(null);
  const [students, setStudents] = useState("");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  console.log("teachersData");
  useEffect(() => {
    const fetchData = async () => {
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
          if (teacher.username === username) {
            teacherFound = true;
            return true;
          } else {
            return false;
          }
        });

        if (!teacherFound) {
          console.log("Teacher not found with the entered username.");
        } else {
          console.log("Teacher found:", foundTeacher);
          // Store the found teacher data in state
          setFoundTeacherData(foundTeacher);
          // Set students state here
          setStudents(foundTeacher.classes[0].students);
        }
      } catch (error) {
        console.error("Error fetching teacher data:", error);
        // Handle the error
      }
    };

    fetchData();
  }, [username]);
  return (
    <div className="attendanceContainer">
      <div className="attendHead">
        <h1>Student Attendance</h1>
      </div>
      <div className="attendDate">
        <p>Date: 2023-11-18</p>
      </div>
      <div className="attendanceHeadings">
        <div className="first">
          <h2>S/L</h2>
        </div>
        <div className="second">
          <h2>Student Name</h2>
        </div>
        <div className="third">
          <h2>Student Roll</h2>
        </div>
        <div className="fourth">
          <h2>Attendance</h2>
        </div>
      </div>
      {students ? (
        students.map((student, indx) => (
          <div className="studentDet" key={indx}>
            <div className="first">
              <p>{indx + 1} </p>
            </div>
            <div className="second">
              <p>{student.name}</p>
            </div>
            <div className="third">
              <p>{student.rollNumber}</p>
            </div>
            <div className="fourth">
              <label>
                <input
                  type="radio"
                  name="attendanceOption"
                  value="p"
                  checked={selectedOption === "p"}
                  onChange={handleOptionChange}
                />
                P
              </label>

              <label>
                <input
                  type="radio"
                  name="attendanceOption"
                  value="a"
                  checked={selectedOption === "a"}
                  onChange={handleOptionChange}
                />
                A
              </label>
            </div>
          </div>
        ))
      ) : (
        <p>Loading....</p>
      )}
    </div>
  );
};
export default TeacherCse;
