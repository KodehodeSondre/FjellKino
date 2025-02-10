import React from "react";

const MovieGrid = ({ movies, onSelectMovie }) => {
  return (
    <div className="movie-grid">
      <h2>Alle Tilgjengelige Filmer</h2>
      <div className="grid-container">
        {movies.map((movie, index) => (
          <div key={index} className="grid-item">
            <img src={movie.image} alt={movie.title} className="grid-movie-img" />
            <h3>{movie.title}</h3>
            <p>⭐ {movie.rating} | 🎟️ ${movie.price.toFixed(2)}</p>
            <button className="btnstyle" onClick={() => onSelectMovie(movie)}>
              Bestill Biletter
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieGrid;
