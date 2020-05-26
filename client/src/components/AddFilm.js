import React from "react";
import styled from "styled-components";

const MainContainer = styled.main`
grid-area: main;
background-color: #EAEDF1;
color: #394263
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

const AddFilm = (props) => {
  return (
<>
 <MainContainer>
    <MainBlock>
        <h1>Add Film</h1>
    </MainBlock>
</MainContainer>
</>

)};
export default AddFilm;
  