import React, { useContext, useEffect } from 'react';
import { MovieContext } from './data/movieContext';
import axios from 'axios';
// import { withRouter } from 'react-router-dom';
import styled from "styled-components";
import ListRow from './ListRow';
import UpdateRow from './UpdateRow';

const AdminList = styled.ul`
  list-style: none;
  margin: 1rem 0;
`;

const List = () => {
  const { movieFeed, setMovieFeed, loading, setLoading } = useContext(MovieContext);

  const apiUrl = "http://localhost:5000/api/movies";

  useEffect(() => {
    async function fetchMovies() {
      const result = await axios(apiUrl);
      setMovieFeed(result.data);      
      console.log(result.data);
      setLoading(false);
    }
    fetchMovies();
  }, []); 

  const updates = movieFeed.sort(
    (a, b) => Date.parse(b.Updated) - Date.parse(a.Updated)
  );

  return (
    <div>
    {loading && <span className="sr-only">Loading...</span>}    
      <AdminList>
        {updates.map((res, i) => {
          return <UpdateRow obj={res} key={i} />;
        })}
      </AdminList>
    </div>         

  );
}

export default List;