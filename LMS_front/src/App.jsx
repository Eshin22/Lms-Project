import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/students')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setStudents(data); // Set the fetched data to state
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h1>Student Details</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>User Name</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Birth Date</th>
                        <th>NIC</th>
                        <th>Course ID</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.Student_ID}>
                            <td>{student.Student_ID}</td>
                            <td>{student.User_Name}</td>
                            <td>{student.First_Name}</td>
                            <td>{student.Last_Name}</td>
                            <td>{student.Address}</td>
                            <td>{student.Phone_Number}</td>
                            <td>{student.Email}</td>
                            <td>{student.Birth_Date}</td>
                            <td>{student.NIC}</td>
                            <td>{student.Course_ID}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;
