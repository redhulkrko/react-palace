import React from "react";
import styled from "styled-components";
import { APIContextProvider } from "./data/apiContext";



const MainContainer = styled.main`
grid-area: main;
  height: 100vh;
  margin: 0;
  padding: 20px;
`;

const Reviews = (props) => {
  return (
<>
<APIContextProvider>

 <MainContainer>
       <h1>Reviews</h1>
</MainContainer>
</APIContextProvider>
</>
)};
export default (Reviews);
  