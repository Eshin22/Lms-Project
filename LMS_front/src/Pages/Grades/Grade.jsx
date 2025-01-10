import React, { useState } from "react";
import "./Grade.css";

const Grades = () => {
  const [selectedCategory, setSelectedCategory] = useState("module");
  const [selectedModule, setSelectedModule] = useState(null);

  // Sample data for testing
  const grades = [
    {
      Module_ID: "M1",
      Module_Name: "Mathematics",
      Grade: "A",
      Quizzes: [{ Mark: 85 }, { Mark: 90 }, { Mark: 78 }],
      Assignments: [{ Mark: 88 }, { Mark: 92 }],
    },
    {
      Module_ID: "M2",
      Module_Name: "Physics",
      Grade: "B+",
      Quizzes: [{ Mark: 70 }, { Mark: 75 }],
      Assignments: [{ Mark: 80 }, { Mark: 85 }],
    },
    {
      Module_ID: "M3",
      Module_Name: "Chemistry",
      Grade: "A-",
      Quizzes: [{ Mark: 88 }, { Mark: 82 }, { Mark: 89 }],
      Assignments: [{ Mark: 90 }, { Mark: 91 }],
    },
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedModule(null); // Reset selected module when category changes
  };

  const handleModuleClick = (moduleId) => {
    setSelectedModule(moduleId);
  };

  const renderDetails = () => {
    if (!selectedModule) {
      return <p>Please select a module to view details.</p>;
    }

    const moduleData = grades.find((module) => module.Module_ID === selectedModule);

    if (!moduleData) {
      return <p>Module data not found.</p>;
    }

    if (selectedCategory === "module") {
      return <p><strong>Overall Grade:</strong> {moduleData.Grade}</p>;
    } else if (selectedCategory === "quiz") {
      return moduleData.Quizzes && moduleData.Quizzes.length > 0 ? (
        <ul>
          {moduleData.Quizzes.map((quiz, index) => (
            <li key={index}>
              Quiz {index + 1}: <strong>{quiz.Mark}</strong>
            </li>
          ))}
        </ul>
      ) : (
        <p>No quiz data available.</p>
      );
    } else if (selectedCategory === "assignment") {
      return moduleData.Assignments && moduleData.Assignments.length > 0 ? (
        <ul>
          {moduleData.Assignments.map((assignment, index) => (
            <li key={index}>
              Assignment {index + 1}: <strong>{assignment.Mark}</strong>
            </li>
          ))}
        </ul>
      ) : (
        <p>No assignment data available.</p>
      );
    }
  };

  return (
    <div className="grades-container">
      <div className="sidebar">
        <button
          className={selectedCategory === "module" ? "active" : ""}
          onClick={() => handleCategoryChange("module")}
        >
          Module Grades
        </button>
        <button
          className={selectedCategory === "quiz" ? "active" : ""}
          onClick={() => handleCategoryChange("quiz")}
        >
          Quiz Grades
        </button>
        <button
          className={selectedCategory === "assignment" ? "active" : ""}
          onClick={() => handleCategoryChange("assignment")}
        >
          Assignment Grades
        </button>
      </div>

      <div className="grades-content">
        <h1 className="grades-title">Grades</h1>
        <div className="grades-view">
          <div className="module-list">
            <h3>Modules</h3>
            <ul>
              {grades.map((grade) => (
                <li key={grade.Module_ID}>
                  <a
                    href="#"
                    className={selectedModule === grade.Module_ID ? "active-module" : ""}
                    onClick={() => handleModuleClick(grade.Module_ID)}
                  >
                    {grade.Module_Name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="details-section">
            <h3>Details</h3>
            {renderDetails()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grades;
