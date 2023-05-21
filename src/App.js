import React, { useEffect } from "react";
import './App.css'
import SearchIcon from './Search.svg'

const API_URL = 'http://www.omdbapi.com/?apikey=5f70da0e';


const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data.Search);
    }


    useEffect(() => {
        searchMovies('spiderman');
    }, []);



    return (
      <h1>App</h1>  
    );
}

export default App;