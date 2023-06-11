export interface Movie {
  adult: boolean;
  backdropPath: "/1ntePsIqeklfmrQJqZPncCydsqY.jpg";
  genreIds: string[];
  id: number;
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  posterPath: string;
  releaseDate: string;
  title: string;
  voteAverage: number;
}

export interface MovieRaw {
  adult: boolean;
  backdrop_path: "/1ntePsIqeklfmrQJqZPncCydsqY.jpg";
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
}

