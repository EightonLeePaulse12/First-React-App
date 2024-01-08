import { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "../src/search.svg";
import MovieCard from "./MovieCard";

const url = "http://www.omdbapi.com?apikey=bd615ac1";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  const searchMov = async (title) => {
    const resp = await fetch(`${url}&s=${title}`);
    const data = await resp.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMov("Batman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search For Movies"
          value={searchTerm}
          onChange={(e) => {setSearchTerm(e.target.value)}}
        />
        <img src={SearchIcon} alt="search" onClick={() => searchMov(searchTerm)} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((e) => (
            <MovieCard key={e.imdbID} movie={e} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
