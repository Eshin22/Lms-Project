import React, { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [menu, setMenu] = useState("Home");

  return (
    <div className="navbar">
      <ul className="navbar-menu">
        <li
          className={menu === "Home" ? "active" : ""}
          onClick={() => setMenu("Home")}
        >
          Home
        </li>
        <li
          className={menu === "Dashboard" ? "active" : ""}
          onClick={() => setMenu("Dashboard")}
        >
          Dashboard
        </li>
        <li
          className={menu === "MyCourses" ? "active" : ""}
          onClick={() => setMenu("MyCourses")}
        >
          My Courses
        </li>
        <li
          className={menu === "Profile" ? "active" : ""}
          onClick={() => setMenu("Profile")}
        >
          Profile
        </li>
        <li
          className={menu === "Logout" ? "active" : ""}
          onClick={() => setMenu("Logout")}
        >
          Logout
        </li>
        <li
          className={menu === "Notification" ? "active" : ""}
          onClick={() => setMenu("Notification")}
        >
          Notification
        </li>
        <li
          className={menu === "Settings" ? "active" : ""}
          onClick={() => setMenu("Settings")}
        >
          Settings
        </li>
        <li
          className={menu === "Submissions" ? "active" : ""}
          onClick={() => setMenu("Submissions")}
        >
          Submissions
        </li>
        <li
          className={menu === "Grades" ? "active" : ""}
          onClick={() => setMenu("Grades")}
        >
          Grades
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
