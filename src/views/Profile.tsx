import React from "react";
import "./login.css"
const Profile = () => {
  return `<div class="contenedor">
  <header class="header">
      <section class="button"><h3>Menu</h3></section>
      <section class="button"><h3>Salir</h3></section>
  </header>
  <div class="banner">
      <h1>BIENVENIDO(A) SR(A) CARLOS PEREZ</h1>
  </div>
  <div class="favorites-movies-contender">
      <div class="favorites-movies">
          <header class="header-favorites-movies">
              <h2>MIS PELICULAS FAVORITAS</h2>
          </header>
          <div class="content-favorites-movies">
              <div class="movie">
                  <section class="image">
                      <img src="" alt="No image" srcset="">
                  </section>
                  <section class="info">
                      <header class="title">
                          <h3>Titulo</h3>
                      </header>
                      <section>
                          <p class="text"> <img src="" alt="No image" srcset="">  Desmarcar como favorita </p>
                      </section>
                  </section>
              </div>
          </div>
      </div>
  </div>
 
  <div class="bookins-contender">
      <div class="bookins">
          <header class="header-bookins">
              <h2>MIS RESERVACIONES</h2>
          </header>
          <div class="content-bookins">
              <div class="movie2">
                  <section class="image">
                      <img src="" alt="No image" srcset="">
                  </section>
                  <section class="info2">
                      <header class="title">
                          <h3>Titulo</h3>
                      </header>
                      <section>
                          <p class="text"> Pelicula: </p>
                          <p class="text"> Fecha de funcion: </p>
                          <p class="text"> Cantidad de Boletos: </p>
                      </section>
                  </section>
              </div>
          </div>
      </div>
  </div>
</div>`;
};

export default Profile;
