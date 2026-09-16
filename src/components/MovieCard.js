function MovieCard({ movie, addToFav }) {
  return (
    <div className="card">
 <img
  src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Image"}
  alt={movie.Title}
  onError={(e) => {
    e.target.src = "https://via.placeholder.com/300x450?text=No+Image";
  }}
/>

      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>

      <button onClick={() => addToFav(movie)}>❤️ Favorite</button>

      <button
        onClick={() =>
          window.open(
            `https://www.youtube.com/results?search_query=${movie.Title} trailer`,
            "_blank"
          )
        }
      >
        ▶ Watch
      </button>
    </div>
  );
}

export default MovieCard;