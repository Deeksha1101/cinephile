import React from "react";
import axios from "axios";
// import { useState, useEffect } from "react";

// pages
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";

import DefaultHOC from "./HOC/DefaultHOC";
import MovieHOC from "./HOC/MovieHOC";
import Plays from "./pages/PlayPage";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage} />

      <MovieHOC path="/movie/:id" exact component={MoviePage} />
      <DefaultHOC path="/plays" exact component={Plays} />
    </>
  );
}

export default App;
