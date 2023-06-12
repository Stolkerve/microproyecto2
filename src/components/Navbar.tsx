import React from "react";
import "./navbar.css";
import logo from "../assets/cinex2.webp";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../globalState";
import { firebaseAuth } from "../firebase/client";

const Navbar = () => {
  const navigate = useNavigate();
  const [user] = useGlobalState("user");

  return (
    <nav>
      <img className="nav-logo" onClick={() => navigate("/")} alt="Logo" src={logo} />
      <div style={{ gap: "1rem", display: "flex" }}>
        {user ? (
            <>
              <button onClick={() => navigate("/profile")}>Perfil</button>
              <button onClick={() => firebaseAuth.signOut()}>Salir</button>
            </>
          ) : (
            <>
              <button onClick={() => navigate("/signup")}>Registrarse</button>
              <button onClick={() => navigate("/login")}>Ingresar</button>
            </>
          )
        }
      </div>
    </nav>
  );
};

export default Navbar;
