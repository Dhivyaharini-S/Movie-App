import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_KEY = "73125ec9"; // replace this 

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  return (
    <div>
      <h2>{movie.Title}</h2>
      <img src={movie.Poster} alt={movie.Title} />
      <p>{movie.Plot}</p>
      <p>⭐ {movie.imdbRating}</p>
    </div>
  );
}

export default MovieDetails;