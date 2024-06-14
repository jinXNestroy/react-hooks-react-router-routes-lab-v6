import { useEffect, useState } from "react";
import NavBar from "../components/NavBar.js";
import MovieCard from "../components/MovieCard.js";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        setMovies(data);
      })
      .catch(error => {
        console.error("Error fetching movies:", error);
      });
  }, []);

  return (
    <>
      <header>
        <NavBar />
        <h1>Home Page</h1>
      </header>
      <main>
        {movies.map(movie => (
          <MovieCard key={movie.id} id={movie.id} title={movie.title} />
        ))}
      </main>
    </>
  );
}

export default Home;
