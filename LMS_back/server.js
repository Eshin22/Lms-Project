const express = require("express");
const cors = require("cors"); // To handle CORS
const mysql = require("mysql2");

const app = express();

const port = 8082;

// Enable CORS before defining routes
app.use(
  cors({
    origin: "http://localhost:5173", // Frontend URL
    methods: ["GET", "POST", "DELETE", "PUT", "OPTIONS"], // Allowed HTTP methods
    allowedHeaders: ["Content-Type"], // Allowed headers
  })
);
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1212",
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

app.get("/modules", (req, res) => {
  const moduleName = req.query.moduleName; // Get moduleName from the query parameters

  const query = `
    SELECT 
      m.Module_ID,
      Module_Name,
      m.Course_ID,
      Course_Name,
      Credit,
      t.Tutor_ID,
      Tutor_Type,
      First_Name,
      Last_Name,
      email
    FROM 
      lms_project.module m
    LEFT JOIN 
      teaches t ON m.Module_ID = t.Module_ID
    LEFT JOIN 
      tutor tut ON t.Tutor_ID = tut.Tutor_ID
    LEFT JOIN 
      courses c ON m.Course_ID = c.Course_ID
    WHERE 
      m.Module_Name = ?;
  `;

  db.query(query, [moduleName], (err, results) => {
    if (err) {
      console.error("Error fetching modules:", err);
      res.status(500).send("Error fetching modules");
    } else {
      res.json(results);
    }
  });
});

app.get("/modules/pastPapers", (req, res) => {
  const moduleName = req.query.moduleName; // Get moduleName from the query parameters

  const query = `
    SELECT 
      lm.Title,
      lm.URL,
      lm.Content_ID
    FROM 
      lecture_material lm
    JOIN 
      module m ON m.Module_Id = lm.Module_ID
    WHERE 
      lm.description="Past Paper" AND m.Module_Name = ?;
  `;

  db.query(query, [moduleName], (err, results) => {
    if (err) {
      console.error("Error fetching modules:", err);
      res.status(500).send("Error fetching modules");
    } else {
      res.json(results);
    }
  });
});

app.delete("/modules/pastPapers", (req, res) => {
  const Content_ID = req.body.Content_ID; // Extract Content_ID from the request body
  

  if (!Content_ID) {
    return res.status(400).send("Content_ID is required.");
  }

  // Disable foreign key checks, delete the record, and re-enable foreign key checks
  const disableFKChecks = "SET FOREIGN_KEY_CHECKS = 0;";
  const deleteQuery = "DELETE FROM lecture_material WHERE Content_ID = ?;";
  const enableFKChecks = "SET FOREIGN_KEY_CHECKS = 1;";

  db.query(disableFKChecks, (err) => {
    if (err) {
      console.error("Error disabling foreign key checks:", err);
      return res.status(500).send("Error disabling foreign key checks.");
    }

    db.query(deleteQuery, [Content_ID], (err) => {
      if (err) {
        console.error("Error deleting past paper:", err);
        return res.status(500).send("Error deleting past paper.");
      }

      db.query(enableFKChecks, (err) => {
        if (err) {
          console.error("Error enabling foreign key checks:", err);
          return res.status(500).send("Error enabling foreign key checks.");
        }

        return res.status(200).send("Past paper deleted successfully.");
      });
    });
  });
});



// Start the server
app.listen(port, () => {
  console.log(`Backend is running on http://localhost:${port}`);
});
