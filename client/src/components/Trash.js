import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { APIContextProvider } from "./xapiContext";
import { MyTestStore } from './App';
import TrashList from './TrashList';
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
const Trash = (props) => {

  const { setMovie } = useContext(MovieContext)

  return (
<>

 <MainContainer>
       <h1>Trash</h1>
       <TrashList/>
</MainContainer>
<UpdateContainer>
  <h1>Updates</h1>
  <Updates/>
</UpdateContainer>
</>
)};
export default (Trash);
  