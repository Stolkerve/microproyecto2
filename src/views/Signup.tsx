import React from "react";

import "./signup.css"
const Signup = () => {
  return `<form class="formulario">
  <div class="contenedor">
      <header class="header">
          <div class="menu">
              <h6><a href="" style="color: white;">MENU</a></h6>
          </div>
          <div class="title">
              <h1>REGISTRO DE USUARIO</h1>
          </div>    
      </header>
      <div class="input-contenedor"> 
          <div class="input-correo">
              <h3><label>Correo Electronico:<br><input type="text" name="name" placeholder="Ingresa tu correo"></label></h3>
          </div>
          <div class="input-contraseña">
              <h3><label>Contraseña:<br><input type="password" name="name" placeholder="Ingresa tu contraseña"></label></h3>
          </div>
          <div class="input-repetir-contraseña">
              <h3><label>Repetir Contraseña:<br><input type="password" name="name" placeholder="Repite tu contraseña"></label></h3>
          </div>
      </div>
      <div class="submit-contenedor">
          <input type="submit" value="REGISTRATE" class="button">
      </div>
      <footer>
          <p>¿Ya tienes cuenta? <a class="link" href="">Inicia Sesion</a></p>
      </footer>
  </div>
</form>`;
};

export default Signup;
