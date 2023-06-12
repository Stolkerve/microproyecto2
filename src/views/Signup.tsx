import React from "react";

import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="formulario">
      <div className="contenedor">
        <header className="header">
          <h1>REGISTRO DE USUARIO</h1>
        </header>
        <form className="input-contenedor">
          <input type="text" name="name" placeholder="Ingresa tu correo" />
          <input type="password" name="name" placeholder="Ingresa tu contraseña" />
          <input type="password" name="name" placeholder="Repite tu contraseña" />
          <button type="submit">Registrarme</button>
        </form>
        <footer>
          <p>
            ¿Ya tienes cuenta?{" "}
            <Link className="link" to="/login">
              Inicia Sesion
            </Link>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Signup;
