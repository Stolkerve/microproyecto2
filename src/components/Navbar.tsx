import React from "react";
import "./navbar.css";
import logo from "../assets/cinex2.webp";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <img className="nav-logo" onClick={() => navigate("/")} alt="Logo" src={logo} />
      <div style={{ gap: "1rem", display: "flex" }}>
        <button onClick={() => navigate("/signup")}>Registrarse</button>
        <button onClick={() => navigate("/login")}>Ingresar</button>
      </div>
    </nav>
  );
};

export default Navbar;
