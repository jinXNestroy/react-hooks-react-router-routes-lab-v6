import { useEffect, useState } from "react";
import NavBar from "../components/NavBar.js";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        setDirectors(data);
      })
      .catch(error => {
        console.error("Error fetching directors:", error);
      });
  }, []);

  return (
    <>
      <header>
        <NavBar />
        <h1>Directors Page</h1>
      </header>
      <main>
        {directors.map(director => (
          <article key={director.name}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map(movie => (
                <li key={movie}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Directors;
