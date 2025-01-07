
import './Profile.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profile() {
  const [studentDetails, setStudentDetails] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const studentId = 'S01'; // Replace with dynamic ID

  useEffect(() => {
    axios.get(`http://localhost:8080/student/${studentId}`)
      .then(response => {
        setStudentDetails(response.data);
      })
      .catch(error => console.error(error));
  }, [studentId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentDetails({ ...studentDetails, [name]: value });
  };

  const handleSave = () => {
    axios.put(`http://localhost:8080/student/${studentId}`, studentDetails)
      .then(response => {
        alert(response.data.message);
        setIsEditing(false);
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="profile">
      <h2>Student Profile</h2>
      {isEditing ? (
        <div>
          <label>User Name:</label>
          <input
            type="text"
            name="User_Name"
            value={studentDetails.User_Name || ''}
            onChange={handleInputChange}
          />
          <label>First Name:</label>
          <input
            type="text"
            name="First_Name"
            value={studentDetails.First_Name || ''}
            onChange={handleInputChange}
          />
          <label>Last Name:</label>
          <input
            type="text"
            name="Last_Name"
            value={studentDetails.Last_Name || ''}
            onChange={handleInputChange}
          />
          <label>Address:</label>
          <input
            type="text"
            name="Address"
            value={studentDetails.Address || ''}
            onChange={handleInputChange}
          />
          <label>Phone Number:</label>
          <input
            type="text"
            name="Phone_Number"
            value={studentDetails.Phone_Number || ''}
            onChange={handleInputChange}
          />
          <label>Email:</label>
          <input
            type="email"
            name="Email"
            value={studentDetails.Email || ''}
            onChange={handleInputChange}
          />
          <label>Birth Date:</label>
          <input
            type="date"
            name="Birth_Date"
            value={studentDetails.Birth_Date || ''}
            onChange={handleInputChange}
          />
          <label>NIC:</label>
          <input
            type="text"
            name="NIC"
            value={studentDetails.NIC || ''}
            onChange={handleInputChange}
          />
          {/* <label>Course ID:</label>
          <input
            type="text"
            name="Course_ID"
            value={studentDetails.Course_ID || ''}
            onChange={handleInputChange}
          /> */}
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <p><strong>User Name:</strong> {studentDetails.User_Name}</p>
          <p><strong>First Name:</strong> {studentDetails.First_Name}</p>
          <p><strong>Last Name:</strong> {studentDetails.Last_Name}</p>
          <p><strong>Address:</strong> {studentDetails.Address}</p>
          <p><strong>Phone Number:</strong> {studentDetails.Phone_Number}</p>
          <p><strong>Email:</strong> {studentDetails.Email}</p>
          <p><strong>Birth Date:</strong> {studentDetails.Birth_Date}</p>
          <p><strong>NIC:</strong> {studentDetails.NIC}</p>
          <p><strong>Course ID:</strong> {studentDetails.Course_ID}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default Profile;
