import React, { useState, useEffect } from "react";
import "./EditableAccordion.css"; // Import the CSS file

const EditableAccordion = () => {
  const [accordions, setAccordions] = useState(() => {
    const savedAccordions = localStorage.getItem("accordions");
    return savedAccordions ? JSON.parse(savedAccordions) : [
      { heading: "Week_01", duration: "Jan 13 - Jan 20", content: "Encoding and Modulation" },
    ];
  });

  const [isEditing, setIsEditing] = useState(null); // To track which accordion is being edited
  const [openAccordion, setOpenAccordion] = useState(null); // To track which accordion is open

  useEffect(() => {
    localStorage.setItem("accordions", JSON.stringify(accordions));
  }, [accordions]);

  const handleUpdate = (index, key, value) => {
    const updatedAccordions = [...accordions];
    updatedAccordions[index][key] = value;
    setAccordions(updatedAccordions);
  };

  const addAccordion = () => {
    setAccordions([
      ...accordions,
      { heading: "New Week", duration: "New Duration", content: "New Content" },
    ]);
  };

  const deleteAccordion = (index) => {
    const updatedAccordions = accordions.filter((_, i) => i !== index);
    setAccordions(updatedAccordions);
  };

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="accordion-container">
      {accordions.map((accordion, index) => (
        <div key={index} className="accordion">
          <div className="accordion-header">
            {isEditing === index ? (
              <div className="edit-fields">
                <input
                  type="text"
                  value={accordion.heading}
                  onChange={(e) => handleUpdate(index, "heading", e.target.value)}
                  placeholder="Edit Heading"
                  className="input-field"
                />
                <input
                  type="text"
                  value={accordion.duration}
                  onChange={(e) => handleUpdate(index, "duration", e.target.value)}
                  placeholder="Edit Duration"
                  className="input-field"
                />
              </div>
            ) : (
              <h3 onClick={() => toggleAccordion(index)}>
                {accordion.heading} ({accordion.duration})
                <span id="arrow">{openAccordion === index ? "▲" : "▼"}</span>
              </h3>
            )}
            <button
              className="edit-button"
              onClick={() => setIsEditing(isEditing === index ? null : index)}
            >
              {isEditing === index ? "Save" : "Edit"}
            </button>
            <button
              className="delete-button"
              onClick={() => deleteAccordion(index)}
            >
              Delete
            </button>
          </div>
          {openAccordion === index && (
            <div className="accordion-content">
              {isEditing === index ? (
                <textarea
                  value={accordion.content}
                  onChange={(e) => handleUpdate(index, "content", e.target.value)}
                  placeholder="Edit Content"
                  className="textarea-field"
                />
              ) : (
                <p>{accordion.content}</p>
              )}
            </div>
          )}
        </div>
      ))}
      <button className="add-button" onClick={addAccordion}>
        Add New Accordion
      </button>
    </div>
  );
};

export default EditableAccordion;
