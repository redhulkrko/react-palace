import React from "react";
import styled from "styled-components";
import { APIContextProvider } from "./data/apiContext";

import MovieCarousel from "./MovieCarousel";
import Updates from './Updates'


const MainContainer = styled.main`
grid-area: main;
display:grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 50px auto;
  height: 100vh;
  margin: 0;
  grid-template-areas: "movies movies" "overview office";
  padding: 20px;
`;

const UpdateContainer = styled.div`
  grid-area: updates;
  box-shadow: 0 1px 0 0 #eaedf3;
  padding: 20px;
  background: purple;
`;

const Dashboard = (props) => {
  return (
<>
<APIContextProvider>

 <MainContainer>
        <MovieCarousel/>
        <div class="overview"></div>
                <div class="office"></div>
</MainContainer>
<UpdateContainer>
<h1>Updates</h1>
<Updates/>
</UpdateContainer>
</APIContextProvider>
</>
)};
export default Dashboard;
  