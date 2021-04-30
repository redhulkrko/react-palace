import styled from "styled-components";

export const QBContainer = styled.div`
  display: flex;
  background: #150f0f;
  color: #fff;
`;

export const QBTitleWrapper = styled.div`
  background: DodgerBlue;
  display: flex;
  justify-content: flex-end;
  width: 55%;
`;

export const QBTitle = styled.h2`
  padding: 1rem;
  font-size: 1.2rem;
`;

export const QBMovieWrapper = styled.div`
  background: Red;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 30px;
`;

export const QBLabel = styled.p``;

export const QBMovies = styled.select`
  padding: 5px;
  margin: 10px;
  color: #000;
  font-size: 12px;
  background: transparent;
  -webkit-appearance: none;
`;

export const QBMoviesItem = styled.option`
  /* background: red; */
`;

export const QBSessions = styled.select`
  padding: 5px;
  margin: 10px;
  color: #000;
  font-size: 12px;
  background: transparent;
  -webkit-appearance: none;
`;

export const QBSessionsItem = styled.option`
  /* background: red; */
`;

export const QBBtn = styled.a`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
`;
