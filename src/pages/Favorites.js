import React, { useEffect, useState } from "react";

function Favorites() {
  const [fav, setFav] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("fav")) || [];
    setFav(data);
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Favorites</h2>

      <div className="movies">
        {fav.map((movie) => (
          <div className="card" key={movie.imdbID}>
            <img src={movie.Poster} alt={movie.Title} />
            <h3>{movie.Title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;