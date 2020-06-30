import React from "react";
import styled from "styled-components";
import { APIContextProvider } from "./apiContext";

import MovieCarousel from "./MovieCarousel";

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

const Updates = styled.div`
  grid-area: updates;
  box-shadow: 0 1px 0 0 #eaedf3;
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
<Updates/>
</APIContextProvider>
</>
)};
export default Dashboard;
  