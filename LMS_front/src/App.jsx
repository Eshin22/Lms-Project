import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import NavBar from "./Components/NavBar/NavBar.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import Mycourses from "./Pages/Mycourses/Mycourses.jsx";
import MycourseCard from "./Components/MycourseCard/MycourseCard.jsx";
import Grade from "./Pages/Grades/Grade.jsx";
import Logging from "./Pages/Logging/Logging.jsx";
import Profile from "./Pages/Profile/Profile.jsx";

function App() {
  return (
    <BrowserRouter>
      <NavBar /> {/* Ensure NavBar is rendered once */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/mycourses" element={<Mycourses />} />
        <Route path="/grade" element={<Grade />} />
        <Route path="/logging" element={<Logging />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
