import React from 'react'
import { IMovie } from '../models/IMovie';
import MovieCard from './MovieCard';

const UpcomingList = ({movies}: {movies: IMovie[]}) => {
  return (
    <div className="movies-list-container">
      <div>
        <h2>Proximos estrenos</h2>
      </div>
      <div className="movies-card-container">
        {movies.map((m) => {
          return (
            <MovieCard m={m}/>
          );
        })}
      </div>
    </div>
  )
}

export default UpcomingList