import React from "react";
import {
  QBContainer,
  QBTitleWrapper,
  QBTitle,
  QBMovieWrapper,
  QBLabel,
  QBMovies,
  QBMoviesItem,
  QBSessions,
  QBSessionsItem,
  QBBtn,
} from "./QuickbookElements";

const QuickBook = ({ data, sessions }) => {
  return (
    <QBContainer>
      <QBTitleWrapper>
        <QBTitle>QUICK BOOK</QBTitle>
      </QBTitleWrapper>
      <QBMovieWrapper>
        <QBLabel>Movie </QBLabel>
        <QBMovies>
          {data.map((movie, index) => {
            return (
              <QBMoviesItem key={index} value={movie.Title}>
                {movie.Title} - {movie.Cert}
              </QBMoviesItem>
            );
          })}
        </QBMovies>
        <QBLabel>Date / Time </QBLabel>
        <QBSessions>
          {sessions.map((session, index) => {
            return (
              <QBSessionsItem key={index} value={session.Date}>
                {session.Date} / {session.Time}
              </QBSessionsItem>
            );
          })}
        </QBSessions>
        <QBBtn>Book Now</QBBtn>
      </QBMovieWrapper>
    </QBContainer>
  );
};

export default QuickBook;
