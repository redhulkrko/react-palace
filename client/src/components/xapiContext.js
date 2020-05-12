import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

const APIContext = createContext();

export function APIContextProvider({ children }) {
  const [films, setFilms] = useState([]);
  // const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    async function fetchData() {
      setFilms([]);
      // setPosts([]);
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

      // const { data: myFilms } = await axios.get(
      //   `http://localhost:5000/api/movies`
      // );


      // const allFilms = vFilms.map(vFilm => {
      //   const localFilm =
      //     myFilms.find(
      //       myFilm => myFilm.Id === vFilm.Id
      //     ) || {};
      //   return { ...vFilm, ...localFilm };
      // });



      // console.log({ merged_array });

      // const allFilms = [
      //   ...myFilms,
      //   ...vFilms.filter(
      //     vFilm => !myFilms.find(myFilm => myFilm.Id === vFilm.Id)
      //   )
      // ];

      console.log(vFilms);
      // console.log(myFilms);
      // console.log(allFilms);

      const allFilms = [
        ...vFilms,
      ];
      setFilms(allFilms);
      setLoading(false);
      // setPosts(myFilms);
    }
    fetchData();
  }, []);

  return (
    <APIContext.Provider
      value={{
        films,
        loading  
      }}
    >
      {children}
    </APIContext.Provider>
  );
}

export default APIContext;
