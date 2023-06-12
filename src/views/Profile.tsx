import React from "react";
import "./login.css";
const Profile = () => {
  return (
    <div className="contenedor">
      <header className="header">
        <section className="button">
          <h3>Menu</h3>
        </section>
        <section className="button">
          <h3>Salir</h3>
        </section>
      </header>
      <div className="banner">
        <h1>BIENVENIDO(A) SR(A) CARLOS PEREZ</h1>
      </div>
      <div className="favorites-movies-contender">
        <div className="favorites-movies">
          <header className="header-favorites-movies">
            <h2>MIS PELICULAS FAVORITAS</h2>
          </header>
          <div className="content-favorites-movies">
            <div className="movie">
              <section className="image">
                <img src="" alt="No image" />
              </section>
              <section className="info">
                <header className="title">
                  <h3>Titulo</h3>
                </header>
                <section>
                  <p className="text">
                    {" "}
                    <img src="" alt="No image" /> Desmarcar como favorita{" "}
                  </p>
                </section>
              </section>
            </div>
          </div>
        </div>
      </div>

      <div className="bookins-contender">
        <div className="bookins">
          <header className="header-bookins">
            <h2>MIS RESERVACIONES</h2>
          </header>
          <div className="content-bookins">
            <div className="movie2">
              <section className="image">
                <img src="" alt="No image" />
              </section>
              <section className="info2">
                <header className="title">
                  <h3>Titulo</h3>
                </header>
                <section>
                  <p className="text"> Pelicula: </p>
                  <p className="text"> Fecha de funcion: </p>
                  <p className="text"> Cantidad de Boletos: </p>
                </section>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
