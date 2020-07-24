import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { APIContextProvider } from "./xapiContext";
import { MyTestStore } from './App';
import List from './List';
import Updates from './Updates';
import { MovieContext } from './data/movieContext';

const MainContainer = styled.main`
grid-area: main;
  margin: 0;
  padding: 20px;
  overflow-y: scroll;
`;

const UpdateContainer = styled.div`
  grid-area: updates;
  box-shadow: 0 1px 0 0 #eaedf3;
  padding: 20px;
  background: purple;
`;
const Movies = (props) => {
  console.log(useContext(MyTestStore));

  const { setMovie } = useContext(MovieContext)

  const newMovie = () => {
    setMovie({})
    props.history.push('/admin/movies/new');

  }

  return (
<>

 <MainContainer>
       <h1>Movies</h1>
       <Link onClick={newMovie}>Add Movie</Link>
       <List/>
</MainContainer>
<UpdateContainer>
  <h1>Updates</h1>
  <Updates/>
</UpdateContainer>
</>
)};
export default (Movies);
  