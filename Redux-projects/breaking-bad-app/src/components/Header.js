import React from "react";

import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <>
      <nav>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "white",
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginLeft: "1rem",
            marginRight: "1rem",
          }}
        >
          Characters
        </Link>
        <span
          style={{ color: "white", fontSize: "1.5rem", fontWeight: "bold" }}
        >
          |
        </span>
        <Link
          to="/quote"
          style={{
            textDecoration: "none",
            color: "white",
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginLeft: "1rem",
            marginRight: "1rem",
          }}
        >
          Quotes
        </Link>
      </nav>
    </>
  );
};

export default Header;
