import { useEffect, useState } from "react";
import { useGlobalState } from "../globalState";
import { IMovieDetails } from "../models/IMovie";
import { useParams } from "react-router-dom";

import "./movie.css"
import { addDoc, collection } from "firebase/firestore";

const Movie = () => {
  const [user] = useGlobalState("user")
  const [movie, setMovie] = useState<IMovieDetails | null>(null)
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const movieRes = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?language=es-ES&api_key=${
          import.meta.env.VITE_MOVIE_DB_API_KEY
        }`,
      );
      setMovie(await movieRes.json())
    })()
  }, [])

  async function addFav() {
    try {
      
    } catch (e: any) {
      
    }
    // const docRef = await addDoc(collection(db, "favoritos"), {
    //   userId: user!.uid,
    //   movieId: movie!.id
    // });
  }

  return (
    <div style={{display: "flex", flexWrap:"wrap", justifyContent: "center", alignItems: "center", padding: "1.75rem", gap: "1.75rem", height: "90vh"}}>
      {
        movie ? (
          <>
            <img className="movie-container-img" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
            <div>
              <div style={{backgroundColor: "#01105f", borderRadius: "14px", maxWidth: "38rem", padding: "1.75rem", textAlign: "center"}}>
                <h1>{movie.title}</h1>
                <h4>{movie.overview}</h4>
                <p>Duracion: {movie.runtime} minutos</p>
                <div style={{display: "flex", gap: "0.75rem", alignItems: "center"}}>
                  <h4>Idiomas: </h4>
                  {
                    movie.spoken_languages.map((l) => {
                      return <p style={{borderRadius: "16px", padding: "0.75rem", backgroundColor: "gray"}}>{l.name}</p>
                    })
                  }
                </div>
              </div>
              {
                user ? (
                  <div style={{display: "flex", gap: "1rem", alignItems: "center", marginTop: "1rem"}}>
                    {
                      movie.status === "Released" ? (
                        <button>Reservar</button>
                      ) : (
                        <p>Proximamente: {movie.release_date}</p>
                      )
                    }
                    <button>Favorito</button>
                  </div>
                ) : (<></>)
              }
            </div>
          </>
        ) : (<></>)
      }
    </div>
  ) 
};

export default Movie;
