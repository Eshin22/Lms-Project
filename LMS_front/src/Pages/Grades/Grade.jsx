import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Grade.css";

const Grades = () => {
  const [grades, setGrades] = useState([]);
  const studentId = "SO1"; // Replace with the actual dynamic student ID as needed
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch grades for the student
    axios
      .get(`http://localhost:8081/grades/${studentId}`)
      .then((response) => {
        setGrades(response.data);
        setIsLoading(false); // Data fetched successfully
        console.log("Grades fetched:", response.data); // Debugging purpose
      })
      .catch((error) => {
        console.error("Error fetching grades:", error);
        setIsLoading(false); // Stop loading even if there's an error
      });
  }, [studentId]);

  return (
    <div className="grades-container">
      
      
      <div className="grades-content">
        <h1 className="grades-title">Grades</h1>

        {/* Show a loading indicator while fetching */}
        {isLoading ? (
          <p>Loading grades...</p>
        ) : grades.length === 0 ? (
          // If no grades are fetched
          <p>No grades available for this student.</p>
        ) : (
          // If grades are fetched
          <div className="grades-grid">
            {grades.map((grade) => (
              <div className="grade-card" key={grade.Module_ID}>
                <h2>{grade.Module_Name}</h2>
                <p>Grade: {grade.Grade}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Grades;
