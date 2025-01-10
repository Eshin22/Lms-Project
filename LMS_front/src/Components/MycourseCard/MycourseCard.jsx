import React from "react";
import "./MycourseCard.css";

const MycourseCard = ({ moduleId, moduleName, imageUrl, backgroundColor }) => {
  return (
    <div
      className="my-course-card"
      style={{ background: backgroundColor }} // Dynamic background color
    >
      <img src={imageUrl} alt={moduleName} className="course-image" />
      <h3>{moduleName}</h3>
      <p>Module ID: {moduleId}</p>
    </div>
  );
};

export default MycourseCard;
