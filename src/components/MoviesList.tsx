import "./movieslist.css";
import { IMovie } from "../models/IMovie";
import { FaSearch } from "react-icons/fa";
import MovieCard from "./MovieCard";

const MoviesList = ({movies}: {movies: IMovie[]}) => {
  return (
    <div className="movies-list-container">
      <form>
        <input
          style={{ borderRadius: "12px 0px 0px 12px" }}
          type="text"
          placeholder="Nombre de una pelicula"
        />
        <button className="movies-list-button">
          <FaSearch />
        </button>
      </form>
      <div className="movies-card-container">
        {movies.map((m) => {
          return (
            <MovieCard m={m}/>
          );
        })}
      </div>
    </div>
  );
};

export default MoviesList;
