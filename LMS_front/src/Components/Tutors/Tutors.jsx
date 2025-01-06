import React from "react";
import "./Tutors.css";

function Tutors() {
  const [array, setArray] = useState([]);

  
    useEffect(() => {
        fetch('http://localhost:8081/tutors')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setArray(data); // Set the fetched data to state
            })
            .catch(err => console.log(err));
    }, []);


  return (
    <div>
      <h1>Tutor Details</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Tutor ID</th>
            <th>Type</th>
            <th>User Name</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Birth Date</th>
            <th>NIC</th>
            <th>Course ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {array.map((tutor) => (
            <tr key={tutor.Tutor_ID}>
              <td>{tutor.Tutor_ID}</td>
              <td>{tutor.Tutor_Type}</td>
              <td>{tutor.User_Name}</td>
              <td>{tutor.First_Name}</td>
              <td>{tutor.Last_Name}</td>
              <td>{tutor.Address}</td>
              <td>{tutor.Phone_Number}</td>
              <td>{tutor.Email}</td>
              <td>{tutor.Birth_Date}</td>
              <td>{tutor.NIC}</td>
              <td>{tutor.Course_ID}</td>
              <td>
                <button onClick={() => handleDelete(tutor.Tutor_ID)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tutors;
