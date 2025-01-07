import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const [menu, setMenu] = useState("Home");

  return (
    <div className="navbar">
      <ul className="navbar-menu">
        <Link to='/'
          className={menu === "Home" ? "active" : ""}
          onClick={() => setMenu("Home")}
        >
          Home
        </Link>
        <Link to='/dashboard'
          className={menu === "Dashboard" ? "active" : ""}
          onClick={() => setMenu("Dashboard")}
        >
          Dashboard
        </Link>
        <Link to='/mycourses'
          className={menu === "MyCourses" ? "active" : ""}
          onClick={() => setMenu("MyCourses")}
        >
          My Courses
        </Link>
        <Link to='/profile'
          className={menu === "Profile" ? "active" : ""}
          onClick={() => setMenu("Profile")}
        >
          Profile
        </Link>
        <Link to='logging'
          className={menu === "Logout" ? "active" : ""}
          onClick={() => setMenu("Logout")}
        >
          Logout
        </Link>
        <Link to='/notification'
          className={menu === "Notification" ? "active" : ""}
          onClick={() => setMenu("Notification")}
        >
          Notification
        </Link>
        <Link to='/settings'
          className={menu === "Settings" ? "active" : ""}
          onClick={() => setMenu("Settings")}
        >
          Settings
        </Link>
        <Link to='/submission'
          className={menu === "Submissions" ? "active" : ""}
          onClick={() => setMenu("Submissions")}
        >
          Submissions
        </Link>
        <Link to='/grade'
          className={menu === "Grades" ? "active" : ""}
          onClick={() => setMenu("Grades")}
        >
          Grades
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;