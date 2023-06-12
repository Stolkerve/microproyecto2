import React, { useEffect, useState } from "react";

import "./movieslist.css";
import { Movie, MovieRaw } from "../models/Movie";
import { Gender } from "../models/Gender";
import {FaSearch} from "react-icons/fa"

const MoviesList = () => {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    (async () => {
      const gendersRes = await fetch(`https://api.themoviedb.org/3/genre/movie/list?language=es&api_key=${import.meta.env.VITE_MOVIE_DB_API_KEY}`)
      const genders = (await gendersRes.json()).genres as Gender[]
      const gendersMap = new Map<number, string>();
      for (let i = 0; i < genders.length; i++) {
        const gender = genders[i];
        gendersMap.set(gender.id, gender.name);
      }

      const moviesRes = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=es-ES&page=1&api_key=${import.meta.env.VITE_MOVIE_DB_API_KEY}`)
      const moviesRaw = (await moviesRes.json()).results as MovieRaw[]
      const newMovies: Movie[] = []
      for (let i = 0; i < moviesRaw.length; i++) {
        const movieRaw = moviesRaw[i];
        let newMovie: Movie = {
          adult: movieRaw.adult,
          backdropPath: movieRaw.backdrop_path,
          genreIds: [],
          id: movieRaw.id,
          originalLanguage: movieRaw.original_language,
          originalTitle: movieRaw.original_title,
          overview: movieRaw.overview,
          posterPath: movieRaw.poster_path,
          releaseDate: movieRaw.release_date,
          title: movieRaw.title,
          voteAverage: movieRaw.vote_average,
        }
        for (let i = 0; i < movieRaw.genre_ids.length; i++) {
          const gender = gendersMap.get(movieRaw.genre_ids[i])
          if (gender)
            newMovie.genreIds.push(gender)
        }

        newMovies.push(newMovie)
      }

      setMovies(newMovies)
    })()
  }, [])
  return (
    <div className="movies-list-container">
      <form>
        <input type="text" placeholder="Nombre de una pelicula" />
        <button
          className="movies-list-button"
        >
          <FaSearch/>
        </button>
      </form>
      <div className="movies-card-container">
        {movies.map((m) => {
          return (
            <div className="movie-card">
              <img className="movie-card-img" src={`https://image.tmdb.org/t/p/w200/${m.posterPath}`}/>
              <div className="movie-card-conteiner">
                <div style={{fontWeight: "500", fontSize: "20px"}}>{m.title}</div>
                <div style={{maxHeight: "120px", overflow: "scroll"}}>{m.overview}</div>
                <div style={{marginTop: "auto", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem"}}>
                  <div style={{fontSize: "14px", fontWeight: "500"}}>{m.originalLanguage}</div>
                  {m.genreIds.map((g) => {
                   return <div style={{fontSize: "14px", fontWeight: "500", backgroundColor: "gray", padding: "0.25rem", borderRadius: "14px"}}>{g}</div>
                  })
                  }
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default MoviesList;
