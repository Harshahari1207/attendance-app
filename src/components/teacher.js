import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Teacher = () => {
  // Empty dependency array ensures this effect runs once when the component mounts
  const { username } = useParams();
  const handleCseButtonClick = () => {
    // Use the cseTeachers state to access the fetched data
    console.log("CSE Teachers:");
    window.location.href = `/teacher/${username}/cse`;
};
const handleEceButtonClick = () => {
    // Use the cseTeachers state to access the fetched data
    console.log("ECE Teachers:");
    window.location.href = `/teacher/${username}/ece`;
  };
  return (
    <div className="teacher">
      <div className="teachMainHeading">
        <h1>Attendance App</h1>
        <h2>Teacher: {username}</h2>
        <button onClick={handleCseButtonClick}>CSE</button>
        <button onClick={handleEceButtonClick}>ECE</button>
      </div>
    </div>
  );
};
export default Teacher;
