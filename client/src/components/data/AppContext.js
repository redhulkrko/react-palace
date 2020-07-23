import React, { useState, useEffect } from "react";
import axios from "axios";
export const AppContext = React.createContext();

export const AppContextProvider = props => {
  const movieData = {
    Title: "",
    OpeningDate: "",
    Synopsis: "",
    Id: "",
    FilmTrailerUrl: "",
    Rating: "",
    Duration: ""
  };
  // const allMovies = [];

  const [movie, setMovie] = useState(movieData);
  // const [uploadPercentage, setUploadPercentage] = useState(0);
  // const [movies, setMovies] = useState(allMovies);

  const [films, setFilms] = useState([]);
  const [posts, setPosts] = useState([]);
  const [vzfilms, setVZFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setFilms([]);
      setPosts([]);
      setVZFilms([]);
      setLoading(true);

      const headers = {
        VeeziAccessToken: "4nv3j36r58gkxfka0gneakmmnc"
      };

      const { data: vFilms } = await axios.get(
        `https://api.us.veezi.com/v1/film`,
        {
          headers
        }
      );

      const { data: myFilms } = await axios.get(
        `http://localhost:5000/api/movies`
      );

      const allFilms = [
        ...vFilms.map(vFilm => {
          const localFilm =
            myFilms.find(myFilm => myFilm.Id === vFilm.Id) || {};
          return { ...vFilm, ...localFilm };
        }),
        ...myFilms.filter(
          myFilm => !vFilms.find(vFilm => vFilm.Id === myFilm.Id)
        )
      ];

      console.log(allFilms);
      // console.log(myFilms);
      // console.log(allFilms);

      setFilms(allFilms);
      setLoading(false);
      setVZFilms(vFilms);
      setPosts(myFilms);
    }
    fetchData();
  }, []);

  const values = {
    movie,
    setMovie,
    // uploadPercentage,
    // setUploadPercentage,
    // movies,
    // setMovies,
    films,
    vzfilms,
    posts,
    loading,
    setLoading
  };
  return (
    <AppContext.Provider value={values}>{props.children}</AppContext.Provider>
  );
};

export default { AppContext, AppContextProvider };
