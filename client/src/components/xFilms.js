import React from "react";
import styled from "styled-components";
import { APIContextProvider } from "./xapiContext";



const MainContainer = styled.main`
grid-area: main;
  height: 100vh;
  margin: 0;
  padding: 20px;
`;

const Films = (props) => {
  return (
<>
<APIContextProvider>

 <MainContainer>
       <h1>Films</h1>
</MainContainer>
</APIContextProvider>
</>
)};
export default (Films);
  