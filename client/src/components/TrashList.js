import React, { useContext, useEffect, useState, useMemo } from 'react';
import { MovieContext } from './data/movieContext';
import axios from 'axios';
// import { withRouter } from 'react-router-dom';
import styled from "styled-components";
import TrashRow from './TrashRow';

const AdminList = styled.ul`
  list-style: none;
  margin: 1rem 0;
`;

const Tab = styled.button`
  font-size: 1em;
  padding: 5px 20px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  ${({ active }) =>
    active &&`
    border-bottom: 2px solid purple;
    opacity: 1;
  `}
`;


const TrashList = () => {

  const [loading, setLoading] = useState(true);
  const { movieFeed, setMovieFeed, fetchAllMovies, fetchList } = useContext(MovieContext);

  const promise = fetchAllMovies();

  const trashed_movies = movieFeed.filter(item => item.Status == 'trash');

  useEffect(() => {
    setLoading(true)
    promise.then(data => {
      console.log(data)
      setMovieFeed(data)
      setLoading(false)
    });
  }, [fetchList]);

  return (
    <div>
        {loading && <p>Loading...</p>}
        {!loading &&
      <AdminList>
        {trashed_movies.map((res, i) => {
          return <TrashRow obj={res} key={i} />;
        })}
      </AdminList>
}
    </div>         

  );
}

export default TrashList;