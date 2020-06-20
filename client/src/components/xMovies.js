import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { APIContextProvider } from "./xapiContext";
import { MyTestStore } from './App';
import List from './List';
import Updates from './Updates'

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

  return (
<>

 <MainContainer>
       <h1>Movies</h1>
       <Link to="/admin/movies/new">Add Movie</Link>
       <List/>
</MainContainer>
<UpdateContainer>
  <h1>Updates</h1>
  <Updates/>
</UpdateContainer>
</>
)};
export default (Movies);
  