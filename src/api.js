import axios from "axios";

const API_KEY = "YOUR_API_KEY"; // replace this

export const fetchMovies = async (query = "popular") => {
  const url =
    query === "popular"
      ? `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      : `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;

  const res = await axios.get(url);
  return res.data.results;
};