import React from "react";
import "./footer.css";
import logo from "../assets/cinex2.webp";

const Footer = () => {
  return (
    <footer>
      <img width="150" src={logo} />
      <div>
        Suramericana de Espectáculos S.A. RIF: J-00045832-4 || © Copyright 2022. Cinex. Todos los
        derechos reservados
      </div>
    </footer>
  );
};

export default Footer;
