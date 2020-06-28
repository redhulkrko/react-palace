import React, { useState } from 'react';

export const AppContext = React.createContext({movie: {}});

export const AppContextProvider = (props) => {


const movieData = { Title: "", OpeningDate: "", Synopsis: "", Id: "", FilmTrailerUrl: "", Rating: "", Duration: "" };
const allMovies = [];

const [movie, setMovie] = useState(movieData);
const [showLoading, setShowLoading] = useState(false);
const [uploadPercentage, setUploadPercentage] = useState(0);
const [movies, setMovies] = useState(allMovies);

const values = {
  movie,
  setMovie,
  showLoading,
  setShowLoading,
  uploadPercentage,
  setUploadPercentage,
  movies,
  setMovies
};
  return (
    <AppContext.Provider value={values}>
      {props.children}
    </AppContext.Provider>
  );
}

export default { AppContext, AppContextProvider };