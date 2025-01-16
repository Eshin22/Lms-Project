import React, { useState, useEffect } from "react";
import "./EditableAccordion.css"; // Import the CSS file

const EditableAccordion = ({moduleName}) => {
  const [accordions, setAccordions] = useState(() => {
    const savedAccordions = localStorage.getItem("accordions");
    return savedAccordions
      ? JSON.parse(savedAccordions)
      : [
          {
            heading: "Week_01",
            startDate: "2025-01-01",
            endDate: "2025-01-07",
            content: "Update Content",
            // section: [],
          },
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
    if (key === "startDate" || key === "endDate") {
      updatedAccordions[index].duration = `${updatedAccordions[index].startDate} - ${updatedAccordions[index].endDate}`;
    }
    setAccordions(updatedAccordions);
  };

  const addAccordion = () => {
    setAccordions([
      ...accordions,
      {
        heading: "New Week",
        startDate: "2025-01-01",
        endDate: "2025-01-07",
        duration: "2025-01-01 - 2025-01-07",
        content: "New Content",
        // section: [],
      },
    ]);
  };

  // const addSection = (index, resourceType, resourceLink) => {
  //   if (!resourceLink) return;
  //   const updatedAccordions = [...accordions];
  //   updatedAccordions[index].sections.push({ type: resourceType, link: resourceLink });
  //   setAccordions(updatedAccordions);
  // };

  // const removeSection = (accordionIndex, sectionIndex) => {
  //   const updatedAccordions = [...accordions];
  //   updatedAccordions[accordionIndex].sections.splice(sectionIndex, 1);
  //   setAccordions(updatedAccordions);
  // };

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
          <div className="accordion-header" onClick={() => toggleAccordion(index)}>
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
                  type="date"
                  value={accordion.startDate}
                  onChange={(e) => handleUpdate(index, "startDate", e.target.value)}
                  className="input-field"
                />
                <input
                  type="date"
                  value={accordion.endDate}
                  onChange={(e) => handleUpdate(index, "endDate", e.target.value)}
                  className="input-field"
                />
              </div>
            ) : (
              <div>
                <h3 className="accordion-title">{accordion.heading}</h3>
                <h3 className="accordion-title"> ({accordion.duration})</h3>
          </div>
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
            <span  id="arrow">{openAccordion === index ? "▲" : "▼"}</span>
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
              
              {/* <div className="resource-section">
                <h4>Resources:</h4>
                <ul>
                  {accordion.sections.map((section, sectionIndex) => (
                    <li key={sectionIndex}>
                      <a href={section.link} target="_blank" rel="noopener noreferrer">
                        {section.type}: {section.link}
                      </a>
                      <button
                        className="remove-section-button"
                        onClick={() => removeSection(index, sectionIndex)}
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="add-section">
                  <input
                    type="text"
                    placeholder="Enter resource link"
                    id={`resource-link-${index}`}
                    className="add-resource-input"
                  />
                  <select
                    id={`resource-type-${index}`}
                    className="resource-type-selector"
                  >
                    <option value="PDF">PDF</option>
                    <option value="Video">Video</option>
                  </select>
                  <button
                    onClick={() =>
                      addSection(
                        index,
                        document.getElementById(`resource-type-${index}`).value,
                        document.getElementById(`resource-link-${index}`).value
                      )
                    }
                    className="add-resource-button"
                  >
                    Add Resource
                  </button>
                </div>
              </div> */}
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
