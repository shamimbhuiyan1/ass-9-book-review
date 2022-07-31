import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";
const Navbar = () => {
  return (
    <div className="nabvar-container">
      <h2 style={{ fontSize: "30px" }}>Book Review</h2>
      <nav className="nav">
        <Link to="/" style={{ color: "white" }}>
          Home
        </Link>
        <Link to="/review" style={{ color: "white" }}>
          Review
        </Link>
        <Link to="/dashboard" style={{ color: "white" }}>
          DashBoard
        </Link>
        <Link to="/blogs" style={{ color: "white" }}>
          Blogs
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
