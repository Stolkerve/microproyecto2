import { useEffect, useState } from "react";
import Carousel from "../components/Carousel";

import MoviesList from "../components/MoviesList";
import UpcomingList from "../components/UpcomingList";
import { Gender } from "../models/Gender";
import { IMovie, MovieRaw } from "../models/IMovie";

const Landing = () => {
  const [upcomingMovies, setUpcomingMovies] = useState<IMovie[]>([])  
  const [movies, setMovies] = useState<IMovie[]>([])  

  useEffect(() => {
    (async () => {
      const gendersRes = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?language=es&api_key=${
          import.meta.env.VITE_MOVIE_DB_API_KEY
        }`,
      );
      const genders = (await gendersRes.json()).genres as Gender[];
      const gendersMap = new Map<number, string>();
      for (let i = 0; i < genders.length; i++) {
        const gender = genders[i];
        gendersMap.set(gender.id, gender.name);
      }

      const moviesRes = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?language=es-ES&page=1&api_key=${
          import.meta.env.VITE_MOVIE_DB_API_KEY
        }`,
      );
      setMovies(xd((await moviesRes.json()).results, gendersMap));

      const upcomingRes = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?language=es-ES&page=1&api_key=${import.meta.env.VITE_MOVIE_DB_API_KEY}`
      )
      setUpcomingMovies(xd((await upcomingRes.json()).results, gendersMap))
      console.log(await upcomingRes.json())

    })()
  }, [])

  function xd(moviesRaw: MovieRaw[], gendersMap: Map<number, string>) {
      const movies: IMovie[] = [];
      for (let i = 0; i < moviesRaw.length; i++) {
        const movieRaw = moviesRaw[i];
        let newMovie: IMovie = {
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
        };
        for (let i = 0; i < movieRaw.genre_ids.length; i++) {
          const gender = gendersMap.get(movieRaw.genre_ids[i]);
          if (gender) newMovie.genreIds.push(gender);
        }

        movies.push(newMovie);
      }
      return movies
  }

  return (
    <>
      <Carousel />
      <MoviesList movies={movies}/>
      <UpcomingList movies={upcomingMovies}/>
    </>
  );
};

export default Landing;
