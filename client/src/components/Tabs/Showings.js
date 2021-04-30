import React from "react";
import Button from "../Button/Button";
import { format, parseISO, isSameDay, getHours } from "date-fns";

import { BtnContainer, BtnWrap, Heading } from "./ShowingElements";

const Showings = ({ movid, sessions }) => {
  return (
    <>
      <BtnContainer>
        <Heading>Showtimes:</Heading>
        {sessions
          .sort(function (a, b) {
            return (
              getHours(parseISO(b.PreShowStartTime)) -
              getHours(parseISO(a.PreShowStartTime))
            );
          })
          .filter(
            (item) =>
              item.FilmId === movid &&
              isSameDay(parseISO(item.PreShowStartTime), new Date())
          )
          .map((product, index) => {
            return (
              <BtnWrap>
                <Button key={index} buttonStyle="btn--outline">
                  {format(parseISO(product.PreShowStartTime), "h:mm a")}
                </Button>
              </BtnWrap>
            );
          })}
      </BtnContainer>
    </>
  );
};

export default Showings;
