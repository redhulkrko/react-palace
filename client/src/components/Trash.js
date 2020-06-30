import React from "react";
import styled from "styled-components";
import { APIContextProvider } from "./apiContext";



const MainContainer = styled.main`
grid-area: main;
  height: 100vh;
  margin: 0;
  padding: 20px;
`;

const Trash = (props) => {
  return (
<>
<APIContextProvider>

 <MainContainer>
       <h1>Trash</h1>
</MainContainer>
</APIContextProvider>
</>
)};
export default (Trash);
  