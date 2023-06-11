import React, { useEffect, useState } from "react";

import "./movieslist.css";
import { Movie, MovieRaw } from "../models/Movie";
import { Gender } from "../models/Gender";

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
          style={{ borderRadius: "0px 12px 12px 0px", backgroundColor: "#01105f", color: "white" }}
        >
          Buscar
        </button>
      </form>
      <div>
        {movies.map(() => {
          return <></>;
        })}
      </div>
    </div>
  );
};

export default MoviesList;
