const express = require('express');
const cors = require('cors'); // To handle CORS
const mysql = require('mysql');

const app = express();
const port = 8081;

// Enable CORS

app.use(cors({
    origin: 'http://localhost:5174', // Allow requests from the frontend
    methods: ['GET', 'POST'],       // Specify allowed methods
  }));

  const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1212',
    database: 'lms_project',
  });

  db.connect(err => {
    if (err) throw err;
    console.log('MySQL Connected...');
  });





// app.get("/", (req, res) => {
//     res.send("Hello from the Node.js backend!");
// });

// Example API route
// app.get("/api/data", (req, res) => {
//     res.json({ message: "This is data from the backend!" });
// });

app.get("/", (req, res) => {
    const query = 'SELECT * FROM lms_project.Courses;'; // Adjust query based on your table
    db.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send("An error occurred while fetching courses.");
        } else {
            res.json(results);
        }
    });
});


// Start the server
app.listen(port, () => {
    console.log(`Backend is running on http://localhost:${port}`);
});
