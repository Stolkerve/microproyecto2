import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="formulario">
      <div className="contenedor">
        <header className="header">
          <h1>INICIA SESION</h1>
        </header>
        <form className="input-contenedor">
          <input type="text" placeholder="Ingresa tu correo" />
          <input type="password" placeholder="Ingresa tu contraseña" />
          <button type="submit">Iniciar sesion</button>
        </form>
        <footer>
          <p>
            ¿No tienes cuenta?{" "}
            <Link className="link" to="/signup">
              Registrate
            </Link>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Login;
