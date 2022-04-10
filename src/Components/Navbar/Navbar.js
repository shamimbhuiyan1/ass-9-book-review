import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/bookReview">Review</Link>
      <Link to="/dashboard">DashBoard</Link>
      <Link to="/blogs">Blogs</Link>
    </div>
  );
};

export default Navbar;
