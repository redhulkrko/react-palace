import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
background-color: #EAEDF1;
color: #394263;
`;

const MainBlock = styled.div`
display: block;
column-count: 1;
column-gap: 20px;
margin: 20px;

@media only screen and (min-width: 65.625em) {
column-count: 2;
}
`;

// const Card = styled.div`
// display: flex;
// flex-direction: column;
// width: 100%;
// background-color: #fff;
// margin-bottom: 20px;
// -webkit-column-break-inside: avoid;
// height: 800px;
// `;


const Films = (props) => {
  return (
<>
 <MainContainer>
    <MainBlock>
        <h1>Films</h1>
    </MainBlock>
</MainContainer>
</>
)};
export default Films;
  