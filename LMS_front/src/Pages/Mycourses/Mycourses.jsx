import React, { useEffect, useState } from "react";
import axios from "axios";
import MycourseCard from "../../Components/MycourseCard/MycourseCard.jsx";
import "./Mycourses.css";

const Mycourses = () => {
  const [modules, setModules] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const studentId = "S01"; // Replace with dynamic student ID as needed

  // Array of background gradients for the cards
  const backgroundColors = [
    "linear-gradient(135deg, #2196f3, #90caf9)", // Blue gradient
    "linear-gradient(135deg, #f44336, #ff7961)", // Red gradient
    "linear-gradient(135deg, #4caf50, #a5d6a7)", // Green gradient
    "linear-gradient(135deg, #ff9800, #ffcc80)", // Orange gradient
  ];

  useEffect(() => {
    axios
      .get(`http://localhost:8081/modules/${studentId}`)
      .then((response) => {
        setModules(response.data);
        setIsLoading(false);
        console.log("Modules fetched:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching modules:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="page-title-container">
      <h1 className="page-title">Excelling in Module-Based Learning</h1>
    <div className="my-courses-container">
    {isLoading ? (
  <div className="loading-container">
    <div className="spinner"></div>
    <p>Loading courses...</p>
  </div>
      ) : modules.length === 0 ? (
        <p>No courses available for this student.</p>
      ) : (
        modules.map((module, index) => (
          <MycourseCard
            key={module.Module_ID}
            moduleId={module.Module_ID}
            moduleName={module.Module_Name}
            imageUrl={module.Module_url || "https://example.com/default-image.jpg"}
            backgroundColor={backgroundColors[index % backgroundColors.length]} // Rotate background colors
          />
        ))
      )}
    </div>
    </div>
  );
};

export default Mycourses;
