import React, { useContext, useEffect, useState } from 'react';
import { MovieContext } from './data/movieContext';
import axios from 'axios';
// import { withRouter } from 'react-router-dom';
import styled from "styled-components";
import UpdateRow from './UpdateRow';

const AdminList = styled.ul`
  list-style: none;
  margin: 1rem 0;
`;

const UpdatesList = () => {
  
  const [loading, setLoading] = useState(true);

  const { myMovies, setMyMovies, fetchMovies } = useContext(MovieContext);

  const promise = fetchMovies();

  useEffect(() => {
    setLoading(true)
    promise.then(updates => {
      console.log(updates)
      setMyMovies(updates)
      setLoading(false)
    });
  }, []);

  const updates = myMovies.sort(function(a, b) { 
    return new Date(b.Updated) - new Date(a.Updated)
  })

  console.log(updates);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading &&
      <AdminList>
        {updates.slice(0,5).map((res, i) => {
          return <UpdateRow obj={res} key={i} />;
        })}
      </AdminList>
}
    </div>         

  );
}

export default UpdatesList;