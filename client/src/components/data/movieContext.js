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


const [sessionsFeed, setSessionsFeed] = useState([]);

const [fetchList, setFetchList] = useState(false);

const headers = { VeeziAccessToken: "4nv3j36r58gkxfka0gneakmmnc" }


function fetchAllMovies() {
  return new Promise((resolve, reject) => {
  axios.all([
    axios.get('https://api.us.veezi.com/v1/film', {headers}),
    axios.get('http://localhost:5000/api/movies')
   ])
   .then(axios.spread(function (vzMovies, myMovies) {
     console.log('Moveez', vzMovies.data);
     console.log('Movies', myMovies.data);
     const movieCollection = [
      ...vzMovies.data.map(vzMov => {
      const myMov =
        myMovies.data.find(
          myMov => myMov.Id === vzMov.Id
        ) || {};           
      return { ...vzMov, ...myMov };
    }), ...myMovies.data.filter( myMov => !vzMovies.data.find(vzMov => vzMov.Id === myMov.Id) )]
    resolve(movieCollection)
    console.log(movieCollection)
   }))
  })
}

function fetchMoveez() {
  console.log("fetch moveez...");
  return new Promise((resolve, reject) => {
  axios.get( `https://api.us.veezi.com/v1/film`, {headers})
  .then(function (myMoveez) {
    const myMoveezCollection = [...myMoveez.data.map(vzMov => { return { ...vzMov }}) ]
    resolve(myMoveezCollection)
    })
  })
}

function fetchMovies() {
  console.log("fetch movies...");
  return new Promise((resolve, reject) => {
  axios.get('http://localhost:5000/api/movies')
  .then(function (myMovies) {
  const myMovieCollection = [...myMovies.data.map(myMov => { return { ...myMov }}) ]
  resolve(myMovieCollection)
  })
  })
}


function fetchSessions() {
  console.log("fetch sessions...");
  return new Promise((resolve, reject) => {
  axios.get( `https://api.us.veezi.com/v1/session`, {headers})
  .then(function (mySessions) {
    const mySessionCollection = [...mySessions.data.map(vzSes => { return { ...vzSes }}) ]
    resolve(mySessionCollection)
    })
  })
}

const values = {
  apiMoveez,
  setApiMoveez,
  myMovies,
  setMyMovies,
  movieFeed,
  setMovieFeed,
  movie,
  setMovie,
  fetchAllMovies,
  fetchMoveez,
  fetchMovies,
  fetchSessions,
  fetchList,
  setFetchList,
  sessionsFeed,
  setSessionsFeed
};
  return (
    <MovieContext.Provider value={values}>
      {props.children}
    </MovieContext.Provider>
  );
};