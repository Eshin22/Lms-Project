import React, { useState, useEffect } from "react";
import "./Tutors.css";

function Tutors() {
  const [tutors, setTutors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/tutors")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        setTutors(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    console.log("Delete tutor with ID:", id);
    // Add delete functionality here
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter tutors based on the search query
  const filteredTutors = tutors.filter(
    (tutor) =>
      tutor.First_Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tutor.Last_Name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="tutors-container">
      <h1>Tutor Details</h1>
      <div className="search-container">
        <input
          type="text"
          className="search-box"
          placeholder="Search tutor by name..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      {/* Message when no tutors match the search */}
      {searchQuery && filteredTutors.length === 0 && (
        <p className="no-results">No tutors found matching your search.</p>
      )}

      <div className="tutors-grid">
        {filteredTutors.length === 0 ? (
          <p>No tutors found</p>
        ) : (
          filteredTutors.map((tutor) => (
            <div key={tutor.Tutor_ID} className="tutor-card">
              <img
                src={tutor.Photo_URL}
                alt={`${tutor.First_Name} ${tutor.Last_Name}`}
                className="tutor-photo"
              />
              <div className="tutor-info">
                <h2>{`${tutor.First_Name} ${tutor.Last_Name}`}</h2>
                <p><strong>Type:</strong> {tutor.Tutor_Type}</p>
                <p><strong>Email:</strong> {tutor.Email}</p>
                <p><strong>Phone:</strong> {tutor.Phone_Number}</p>
                <p><strong>Address:</strong> {tutor.Address}</p>
                <p><strong>NIC:</strong> {tutor.NIC}</p>
                <p><strong>Course ID:</strong> {tutor.Course_ID}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Tutors;
