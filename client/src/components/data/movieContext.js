import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const MovieContext = createContext();

export const MovieProvider = props => {


const movieData = { Title: "", OpeningDate: "", Synopsis: "", Id: "", FilmTrailerUrl: "", Rating: "", Duration: "" };

// veezi api state
const [apiMoveez, setApiMoveez] = useState([]);

// local api state
const [myMovies, setMyMovies] = useState([]);

// grouped api state
const [movieFeed, setMovieFeed] = useState([]);

// single movie state
const [movie, setMovie] = useState(movieData);


const resetMovie = () => setMovie(movieData);

const [loading, setLoading] = useState(true);

useEffect(() => {
  async function fetchData() {
    setMovieFeed([]);
    setApiMoveez([]);
    setMyMovies([]);
    setLoading(true);


    const headers = {
      VeeziAccessToken: "4nv3j36r58gkxfka0gneakmmnc"
    };

    const { data: vzMovies } = await axios.get(
      `https://api.us.veezi.com/v1/film`,
      {
        headers
      }
    );

    const { data: myMovies } = await axios.get(
      `/api/movies`
    );


    const movieCollection = [
      ...vzMovies.map(vzMov => {
      const myMov =
        myMovies.find(
          myMov => myMov.Id === vzMov.Id
        ) || {};
      return { ...vzMov, ...myMov };
    }), ...myMovies.filter( myMov => !vzMovies.find(vzMov => vzMov.Id === myMov.Id) )]

    setMovieFeed(movieCollection);
    setLoading(false);
    setApiMoveez(vzMovies);
    setMyMovies(myMovies);

  }
  fetchData();
}, []);


const values = {
  apiMoveez,
  setApiMoveez,
  myMovies,
  setMyMovies,
  movieFeed,
  setMovieFeed,
  movie,
  setMovie,
  loading,
  setLoading,
  resetMovie
};
  return (
    <MovieContext.Provider value={values}>
      {props.children}
    </MovieContext.Provider>
  );
};