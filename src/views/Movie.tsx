import React, { useEffect, useState } from "react";
import { useGlobalState } from "../globalState";
import { IMovie } from "../models/IMovie";

const Movie = () => {
  const [user] = useGlobalState("user")
  const [isUpcoming, setIsUpcoming] = useState<boolean>(false)
  const [movie, setMovie] = useState<IMovie | null>(null)

  useEffect(() => {

  }, [])

  return (
    <div>

    </div>
  ) 
};

export default Movie;
