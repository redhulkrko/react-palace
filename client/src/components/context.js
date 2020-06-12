import React, { useState } from 'react';

export const AppContext = React.createContext({movie: {}});

export const AppContextProvider = (props) => {


const movieData = { title: "", date: "", synopsis: "", vID: "", trailer: "" };

const [movie, setMovie] = useState(movieData);
const [showLoading, setShowLoading] = useState(false);
const [uploadPercentage, setUploadPercentage] = useState(0);

const values = {
  movie,
  setMovie,
  showLoading,
  setShowLoading,
  uploadPercentage,
  setUploadPercentage
};
  return (
    <AppContext.Provider value={values}>
      {props.children}
    </AppContext.Provider>
  );
}

export default { AppContext, AppContextProvider };