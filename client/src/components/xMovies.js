import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { APIContextProvider } from "./xapiContext";
import { MyTestStore } from './App';


const MainContainer = styled.main`
grid-area: main;
  height: 100vh;
  margin: 0;
  padding: 20px;
`;
const Movies = (props) => {
  console.log(useContext(MyTestStore));

  return (
<>
<APIContextProvider>

 <MainContainer>
       <h1>Movies</h1>
       <Link to="/admin/movies/new">Add Movie</Link>
</MainContainer>
</APIContextProvider>
</>
)};
export default (Movies);
  