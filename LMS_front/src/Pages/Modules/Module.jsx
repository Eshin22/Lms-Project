import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Module.css";
import { FiDownload, FiTrash2 } from "react-icons/fi";
import EditableAccordion from "../../Components/EditableAccordion/EditableAccordion.jsx";

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(() => {
    const savedState = localStorage.getItem(`accordion-${title}`);
    return savedState !== null ? JSON.parse(savedState) : true;
  });

  const toggleAccordion = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    localStorage.setItem(`accordion-${title}`, JSON.stringify(newState)); // Save state in localStorage
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h2>{title}</h2>
        <span id="arrow">{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
}

// function EditableAccordion({ title, defaultDuration, children }) {
//   const [duration, setDuration] = useState(() => {
//     // Load the saved duration from localStorage
//     return localStorage.getItem(`duration-${title}`) || defaultDuration;
//   });

//   const [isOpen, setIsOpen] = useState(() => {
//     // Retrieve saved state from localStorage, or default to true
//     const savedState = localStorage.getItem(`accordion-${title}`);
//     return savedState !== null ? JSON.parse(savedState) : true;
//   });

//   const toggleAccordion = () => {
//     const newState = !isOpen;
//     setIsOpen(newState);
//     localStorage.setItem(`accordion-${title}`, JSON.stringify(newState)); // Save state in localStorage
//   };

//   // State to track if the duration is being edited
//   const [isEditing, setIsEditing] = useState(false);

//   // Toggle editing state
//   const handleEditToggle = () => {
//     setIsEditing(!isEditing);
//   };

//   // Save the updated duration
//   const handleSave = () => {
//     setIsEditing(false);
//     localStorage.setItem(`duration-${title}`, duration); // Save to localStorage
//   };

//   // Cancel editing without saving
//   const handleCancel = () => {
//     setIsEditing(false);
//     setDuration(localStorage.getItem(`duration-${title}`) || defaultDuration);
//   };

//   return (
//     <div className="accordion">
//       <div className="accordion-header" onClick={toggleAccordion}>
//         <h2 id="edit_accordion_title">{title}</h2>

//         {isEditing ? (
//           <input
//             id="edit_duration"
//             type="text"
//             value={duration}
//             onChange={(e) => setDuration(e.target.value)}
//           />
//         ) : (
//           <span id="duration">{`(${duration})`}</span>
//         )}
//         {isEditing ? (
//           <>
//             <button id="save_duration" onClick={handleSave}>
//               Save
//             </button>
//             <button id="cancel_duration" onClick={handleCancel}>
//               Cancel
//             </button>
//           </>
//         ) : (
//           <button id="edit_duration_button" onClick={handleEditToggle}>
//             Edit
//           </button>
//         )}
//         <span id="arrow">{isOpen ? "▲" : "▼"}</span>
//       </div>
//       {isOpen && <div className="accordion-content">{children}</div>}
//     </div>
//   );
// }

function CourseDetails() {
  const { moduleName } = useParams();
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8082/modules?moduleName=${moduleName}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        if (data.length > 0) {
          const modulesData = data.map((item) => ({
            Module_ID: item.Module_ID,
            Course_ID: item.Course_ID,
            Credit: item.Credit,
            Tutor_ID: item.Tutor_ID,
            First_Name: item.First_Name,
            Course_Name: item.Course_Name,
            Last_Name: item.Last_Name,
            Tutor_Type: item.Tutor_Type,
            email: item.email,
          }));
          setModules(modulesData);
        } else {
          setModules([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, [moduleName]);

  const [pastPapers, setPastPapers] = useState([]);

  //Fetch pastpapers
  useEffect(() => {
    fetch(`http://localhost:8082/modules/pastPapers?moduleName=${moduleName}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setPastPapers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching past papers:", error);
        setLoading(false);
      });
  }, []);

  const handleNavigateToAddPastPaper = () => {
    navigate(`/modules/${moduleName}/add-past-paper`);
  };

  const handleRemovePaper = async (Content_ID) => {
    try {
      const response = await fetch(`http://localhost:8082/modules/pastPapers`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Content_ID }), // Ensure this matches the backend
      });

      if (response.ok) {
        setPastPapers((prev) =>
          prev.filter((paper) => paper.Content_ID !== Content_ID)
        );
      } else {
        console.error("Failed to remove past paper:", await response.text());
        alert("Failed to remove past paper.");
      }
    } catch (error) {
      console.error("Error removing past paper:", error);
      alert("Failed to remove past paper.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }



  return (
    <div className="course-details">
      {modules.length > 0 ? (
        <>
          <h1 id="course-title">
            {modules[0].Module_ID}-{moduleName}
          </h1>
          <div className="course-info-box">
            <Accordion title="General">
              <section className="course-info">
                <p>
                  <strong>Credits:</strong> {modules[0].Credit}
                </p>
              </section>

              <section className="lecturers">
                <h3>Lecturers/Examiners:</h3>
                {modules.map((lecturer, index) => (
                  <p key={index}>
                    {`${lecturer.First_Name} ${lecturer.Last_Name}   :(${lecturer.Tutor_Type})`}{" "}
                    (<a href={`mailto:${lecturer.email}`}>{lecturer.email}</a>)
                  </p>
                ))}
              </section>

              <section className="learning-objectives">
                <h3>Learning Objectives:</h3>
                <p>After completing this course, students should be able to:</p>
                <ul>
                  <li>Explain the theoretical concepts behind {moduleName}.</li>
                </ul>
              </section>

              <section className="past-papers">
                <h2 id="past-paper-heading">Past Papers:</h2>
                <button
                  id="past-paper-button"
                  onClick={handleNavigateToAddPastPaper}
                >
                  <img
                    src="/logos/add_mark.png"
                    id="add-past-paper-icon"
                    alt="Add Past Paper"
                  />

                  <span id="add-past-paper-text">Add Past Paper</span>
                </button>
                <div className="past-paper-container">
                  {pastPapers.map((paper, index) => (
                    <div key={index} className="container">
                      <div className="icon">
                        <span>PDF</span>
                      </div>
                      <a
                        href={paper.URL}
                        className="text"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {paper.Title}
                      </a>

                      <a
                        href={paper.URL}
                        className="download"
                        download={paper.Title + ".pdf"}
                      >
                        <FiDownload />
                      </a>
                      {/* {console.log(paper.Content_ID)} */}
                      <button
                        className="remove"
                        onClick={() => handleRemovePaper(paper.Content_ID)} // Pass the paper ID
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                  ))}
                </div>
              </section>
            </Accordion>

            {/* <EditableAccordion
              title="Week_01"
              defaultDuration="Jan 13 - Jan 20"
            >
              <section>
                <span>Encoding and Modulation</span>
                
              </section>
            </EditableAccordion> */}
            <EditableAccordion/>
            
          </div>
        </>
      ) : (
        <div>No module found for {moduleName}</div>
      )}
    </div>
  );
}

export default CourseDetails;
