import styled from "styled-components";

export const CardContainer = styled.div`
  color: #fff;
  width: 100%;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const CardWrapper = styled.div`
  display: grid;
  z-index: 1;
  /* height: 860px; */
  width: 100%;
  grid-template-columns: 1fr;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const CardRow = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  grid-template-areas: "col1 col2";
  padding: 2rem 0;
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 740px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 32px;
  line-height: 1.1;
  font-weight: 600;
  color: #fff;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Synopsis = styled.p`
  max-width: 690px;
  margin-bottom: 15px;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
`;

export const Details = styled.p`
  color: #fff;
  margin-bottom: 20px;
`;

export const ImgWrap = styled.div`
  max-width: 215px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
