import React from "react";
import "./login.css"
const Login = () => {
  return `<form class="formulario">
  <div class="contenedor">
      <header class="header">
          <div class="menu">
              <h6><a href="" style="color: white;">MENU</a></h6>
          </div>
          <div class="title">
              <h1>¿POSEES UNA CUENTA? INICIA SESION</h1>
          </div>    
      </header>
      <div class="input-contenedor"> 
          <div class="input-correo">
              <h3><label>Correo Electronico:<br><input type="text" placeholder="Ingresa tu correo"></label></h3>
          </div>
          <div class="input-contraseña">
              <h3><label>Contraseña:<br><input type="password" placeholder="Ingresa tu contraseña"></label></h3>
          </div>
      </div>
      <div class="submit-contenedor">
          <input type="submit" value="INICIAR SESION" class="button">
      </div>
      <footer>
          <p>¿No tienes cuenta? <a class="link" href="">Registrate</a></p>
      </footer>
  </div>
</form>`;
};

export default Login;
