import React from "react";
import styled from "styled-components";
import { APIContextProvider } from "./xapiContext";



const MainContainer = styled.main`
grid-area: main;
  height: 100vh;
  margin: 0;
  padding: 20px;
`;

const BoxOffice = (props) => {
  return (
<>
<APIContextProvider>

 <MainContainer>
       <h1>Box Office</h1>
</MainContainer>
</APIContextProvider>
</>
)};
export default (BoxOffice);
  