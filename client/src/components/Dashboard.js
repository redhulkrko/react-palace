import React from "react";
import { APIContextProvider } from "./apiContext";

import styled, { createGlobalStyle } from 'styled-components';

import Overview from "./Overview";
import Updates from "./Updates";
import Films from "./Films";
import Stats from "./Stats";
import Today from "./Today";
import BoxOffice from "./BoxOffice";
import Reviews from "./Reviews";

const GlobalStyle = createGlobalStyle`

  body {
    font-family: "Roboto", sans-serif;
  }

`;

// const Board = styled.div`
//     column-count: 1;
//     column-gap: 20px;
//     margin: 20px;

//     @media (min-width: 992px) {
//         column-count: 2;
//     }

//     @media (min-width: 1200px) {
//         column-count: 2;
//     }
// `;

const Board = styled.div`
    column-count: 1;
    display: grid;
    display: -ms-grid;
    grid-row-gap: 16px;
    grid-column-gap: 16px;
    margin: 20px;

    @media (min-width: 992px) {
        column-count: 2;
    }

    @media (min-width: 1200px) {
      grid-template-columns: 1.4fr 1fr 1fr 1fr 1fr 1.3fr;
      grid-template-rows: 0.2fr 0.2fr 1.8fr 0.2fr 0.2fr 1fr .9fr 0.2fr;
    }
`;



const Dashboard = (props) => {
  return (
<>
<APIContextProvider>
 <GlobalStyle/>
 <Board className="dashboard">
    <Overview/>
    <Today/>
    <Films/>
    <BoxOffice/>
    <Updates/>
    <Reviews/>
    <Stats/>
 </Board>
 </APIContextProvider>
</>
)};
export default Dashboard;
  