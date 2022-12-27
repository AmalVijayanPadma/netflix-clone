import axios from "../Axios/Axios";
import React, { useEffect, useState } from "react";
import "./Row.css";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const imageBaseUrl = "https://image.tmdb.org/t/p/original";
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchMovies() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchMovies();
  }, [fetchUrl]);
  console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies?.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
              <img
                src={`${imageBaseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                alt={`${movie.name}`}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={movie.id}
              ></img>
            )
        )}
      </div>
    </div>
  );
}

export default Row;
