import React from "react";
import {
  format,
  parseISO,
  isSameDay,
  getHours,
  intervalToDuration,
} from "date-fns";
import Button from "../Button";

import ww from "../../images/ww.jpg";
import {
  CardContainer,
  CardWrapper,
  CardRow,
  Column1,
  Column2,
  TextWrapper,
  Heading,
  Synopsis,
  Details,
  ImgWrap,
  Img,
} from "./CardElements";

import { BtnContainer, BtnWrap } from "./ShowingElements";

const Card = ({ movies, sessions, date }) => {
  const screeningsToday = sessions.filter((item) =>
    isSameDay(parseISO(item.PreShowStartTime), new Date(date))
  );

  const filmsToday = movies.filter((film) =>
    screeningsToday.some((screening) => film.Id === screening.FilmId)
  );

  const renderShowTimes = (filmId) => {
    return screeningsToday
      .sort(function (a, b) {
        return (
          getHours(parseISO(b.PreShowStartTime)) -
          getHours(parseISO(a.PreShowStartTime))
        );
      })
      .map((screening, index) => {
        if (screening.FilmId === filmId) {
          return (
            <BtnWrap>
              <Button key={index} buttonStyle="btn--outline">
                {format(parseISO(screening.PreShowStartTime), "h:mm a")}
              </Button>
            </BtnWrap>
          );
        }
        return <></>;
      });
  };

  return (
    <>
      <CardContainer>
        <CardWrapper>
          {filmsToday.map((film, index) => {
            const duration =
              intervalToDuration({ start: 0, end: film.Duration * 60000 }) ||
              {};
            const formatted = `${duration.hours}h ${duration.minutes}min`;
            return (
              <CardRow key={index}>
                <Column1>
                  <ImgWrap>
                    <Img src={ww} alt={ww} />
                  </ImgWrap>
                </Column1>
                <Column2>
                  <TextWrapper>
                    <Heading>{film.Title}</Heading>
                    <Synopsis>{film.Synopsis}</Synopsis>
                    <BtnContainer>
                      <p>Showtimes:</p>
                      {renderShowTimes(film.Id)}
                    </BtnContainer>
                    <Details>
                      {film.Rating} | {formatted} | {film.Genre}
                    </Details>
                    <BtnContainer>
                      <BtnWrap>
                        <Button buttonStyle="btn--outline">MORE INFO</Button>
                      </BtnWrap>
                      <BtnWrap>
                        <Button buttonStyle="btn--outline">TRAILER</Button>
                      </BtnWrap>
                    </BtnContainer>
                  </TextWrapper>
                </Column2>
              </CardRow>
            );
          })}
        </CardWrapper>
      </CardContainer>
    </>
  );
};

export default Card;
