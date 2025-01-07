import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiSettings } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import "./NavBar.css";

const NavBar = () => {
  const [menu, setMenu] = useState("Home");

  return (
    <div className="navbar">
      <ul className="navbar-menu">
        <Link
          to="/"
          className={menu === "Home" ? "active" : ""}
          onClick={() => setMenu("Home")}
        >
          Home
        </Link>
        <Link
          to="/dashboard"
          className={menu === "Dashboard" ? "active" : ""}
          onClick={() => setMenu("Dashboard")}
        >
          Dashboard
        </Link>
        <Link
          to="/mycourses"
          className={menu === "MyCourses" ? "active" : ""}
          onClick={() => setMenu("MyCourses")}
        >
          My Courses
        </Link>
        <Link
          to="/submission"
          className={menu === "Submissions" ? "active" : ""}
          onClick={() => setMenu("Submissions")}
        >
          Submissions
        </Link>
        <Link
          to="/grade"
          className={menu === "Grades" ? "active" : ""}
          onClick={() => setMenu("Grades")}
        >
          Grades
        </Link>
      </ul>
      <div className="navbar-icons">
        <Link to="/notification" onClick={() => setMenu("Notification")}>
          <IoIosNotificationsOutline size={24} className="icon" />
        </Link>
        <Link to="/settings" onClick={() => setMenu("Settings")}>
          <CiSettings size={24} className="icon" />
        </Link>
        <Link to="/profile" onClick={() => setMenu("Profile")}>
          <CgProfile size={24} className="icon" />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
