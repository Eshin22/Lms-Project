import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Module.css";
import { FiDownload } from "react-icons/fi";

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
                    </div>
                  ))}
                </div>
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
