import React, { useContext, useEffect, useState } from 'react';
import styled from "styled-components";
import { MovieContext } from './data/movieContext';
import TrashRow from './TrashRow';



const MainContainer = styled.main`
grid-area: main;
  height: 100vh;
  margin: 0;
  padding: 20px;
`;

const Reviews = (props) => {

  const [loading, setLoading] = useState(true);
  const { sessionsFeed, setSessionsFeed, fetchSessions, fetchList } = useContext(MovieContext);

  const promise = fetchSessions();

  const sessionTitles = [...new Set(sessionsFeed.map(item => item.Title))];
  console.log(sessionTitles);

  useEffect(() => {
    setLoading(true)
    promise.then(data => {
      console.log(data)
      setSessionsFeed(data)
      setLoading(false)
    });
  }, [fetchList]);

  return (
<>

 <MainContainer>
       <h1>Reviews</h1>
       {loading && <p>Loading...</p>}
       {/* {!loading &&
      <p>
        {filtered.map((res, i) => {
          return <TrashRow obj={res} key={i} />;
        })}
      </p>
} */}
</MainContainer>
</>
)};
export default (Reviews);
  