import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TicketModal from "./Tickets";
import MovieGrid from "../components/MovieGrid"; 

const movies = [
    {
      title: "Inception", price: 12.99, rating: 8.8, hall: "A", times: ["12:00", "3:00", "6:00", "9:00"],
      image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    },
    {
      title: "The Dark Knight", price: 10.99, rating: 9.0, hall: "B", times: ["1:00", "4:00", "7:00", "10:00"],
      image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    },
    {
      title: "Interstellar", price: 11.50, rating: 8.6, hall: "C", times: ["11:30", "2:30", "5:30", "8:30"],
      image: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_.jpg",
    },
    {
      title: "Titanic", price: 9.99, rating: 7.9, hall: "D", times: ["12:45", "3:45", "6:45", "9:45"],
      image: "https://m.media-amazon.com/images/M/MV5BYzYyN2FiZmUtYWYzMy00MzViLWJkZTMtOGY1ZjgzNWMwN2YxXkEyXkFqcGc@._V1_.jpg",
    },
    {
      title: "Avatar", price: 13.50, rating: 7.8, hall: "E", times: ["1:15", "4:15", "7:15", "10:15"],
      image: "https://m.media-amazon.com/images/M/MV5BMDEzMmQwZjctZWU2My00MWNlLWE0NjItMDJlYTRlNGJiZjcyXkEyXkFqcGc@._V1_.jpg",
    },
    {
      title: "Joker", price: 10.50, rating: 8.4, hall: "F", times: ["12:00", "3:00", "6:00", "9:00"],
      image: "https://m.media-amazon.com/images/M/MV5BNzY3OWQ5NDktNWQ2OC00ZjdlLThkMmItMDhhNDk3NTFiZGU4XkEyXkFqcGc@._V1_.jpg",
    },
    {
      title: "Avengers: Endgame", price: 14.00, rating: 8.4, hall: "G", times: ["11:00", "2:00", "5:00", "8:00"],
      image: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
    },
    {
      title: "Parasite", price: 9.50, rating: 8.6, hall: "H", times: ["1:30", "4:30", "7:30", "10:30"],
      image: "https://m.media-amazon.com/images/M/MV5BYjk1Y2U4MjQtY2ZiNS00OWQyLWI3MmYtZWUwNmRjYWRiNWNhXkEyXkFqcGc@._V1_.jpg",
    }
  ];

export const Projects = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const settings = {

    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section className="slideContainer">
      <h2>På Kino Nå</h2>
      <div>
        <Slider {...settings}>
          {movies.map((movie, index) => (
            <div className="projectFlex" key={index}>
              <h3>{movie.title}</h3>
              <img className="resizeimg" src={movie.image} alt={movie.title} />
              <button className="btnstyle" onClick={() => setSelectedMovie(movie)}>Bestill Billett</button>
            </div>
          ))}
        </Slider>
      </div>
     <MovieGrid movies={movies} onSelectMovie={setSelectedMovie} />
      
    {selectedMovie && <TicketModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />}
    </section>
  );
};

export default Projects;