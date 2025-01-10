import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Module.css";

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    
    <div className="course-details">
      {modules.length > 0 ? (
        <>
          <h1>
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
                <ol>
                  <li>
                    Explain the theoretical concepts behind data and voice
                    communication.
                  </li>
                </ol>
              </section>
              <section>
                <h2 id ="past-paper-heading">Past Papers : </h2>
                {/* <button id="past-paper-button" onClick={handlelAddPastPaper}>+ Add past paper</button> */}
              </section>
              
            </Accordion>
          </div>
        </>
      ) : (
        <div>No module found for {moduleName}</div>
      )}
    </div>
  );
}

export default CourseDetails;
