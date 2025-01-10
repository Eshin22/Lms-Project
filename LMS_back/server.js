const express = require("express");
const cors = require("cors"); // To handle CORS
const mysql = require("mysql2");

const app = express();

const port = 8081;

// Enable CORS

app.use(
  cors({
    origin: "http://localhost:5173", // Allow requests from the frontend
    methods: ["GET", "POST"], // Specify allowed methods
  })
);
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Em#1014#",
  database: "lms_project",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Connected to the MySQL database.");
});

app.get("/", (req, res) => {
  res.send("Hello from the Node.js backend!");
});

// Example API route
// app.get("/api/data", (req, res) => {
//     res.json({ message: "This is data from the backend!" });
// });

// app.get("/", (req, res) => {
//     const query = 'SELECT * FROM lms_project.Courses;'; // Adjust query based on your table
//     db.query(sql, (err, results) => {
//         if (err) {
//             console.error(err);
//             res.status(500).send("An error occurred while fetching courses.");
//         } else {
//             res.json(results);
//         }
//     });
// });

app.get("/students", (req, res) => {
  const query = "SELECT * FROM student";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching students:", err);
      res.status(500).send("Error fetching students");
    } else {
      res.json(results);
    }
  });
});

app.get("/tutors", (req, res) => {
  const query = "SELECT * FROM tutor";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching Tutors:", err);
      res.status(500).send("Error fetching Tutors");
    } else {
      res.json(results);
    }
  });
});

app.get("/tutors", (req, res) => {
  const query = "SELECT * FROM tutor";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching Tutors:", err);
      res.status(500).send("Error fetching Tutors");
    } else {
      res.json(results);
    }
  });
});

app.get("/modules/:studentId", (req, res) => {
  const studentId = req.params.studentId;
  const query = `
      SELECT 
          m.Module_ID,
          m.Module_Name,
          m.Course_ID,
          m.Module_url,
          m.Credit
      FROM 
          Module_Enrollment me
      JOIN 
          Module m ON me.Module_ID = m.Module_ID
      WHERE 
          me.Student_ID = ?;
  `;

  db.query(query, [studentId], (err, results) => {
    if (err) {
      console.error("Error fetching module details:", err);
      res.status(500).send("Error fetching module details");
    } else {
      res.json(results);
    }
  });
});

app.get("/grades/:studentID", (req, res) => {
  const studentID = res.params.studentID;
  const query = `SELECT 
  m.Module_ID,
  m.Module_Name,
  g.Grade
FROM 
  module AS m
LEFT JOIN 
  Grade AS g 
ON 
  m.Module_ID = g.Module_ID AND g.Student_ID = ?
WHERE 
  m.Student_ID = ?;`;
  db.query(query, [studentId], (err, results) => {
    if (err) {
      console.error("Error fetching module details:", err);
      res.status(500).send("Error fetching module details");
    } else {
      res.json(results);
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Backend is running on http://localhost:${port}`);
});
