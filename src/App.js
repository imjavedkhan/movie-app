import React, { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./Search.svg";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com/?apikey=5f70da0e";

const App = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        searchMovies(movies);
      }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      //console.log(data.Search);
      setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>Movie App</h1>
      <div className="search">
        <input
          placeholder="Search movie"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="Search"
          onClick={() => searchMovies(search)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movie found..</h2>
        </div>
      )}
    </div>
  );
};

export default App;
