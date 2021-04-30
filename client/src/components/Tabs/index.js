import React, { useState, useContext, useEffect } from "react";
import { MovieContext } from "../data/movieContext";
import { filmFeed, showFeed } from "./data";
import {
  addDays,
  format,
  startOfWeek,
  isThursday,
  parse,
  addWeeks,
} from "date-fns";
import FullSchedule from "./FullSchedule";
import SessionList from "./SessionList";
import Card from "./Card";
import { TabsNav, TabsContainer, TabLink, TabsContent } from "./TabsElements";

const today = new Date();
const tomorrow = addDays(today, 1);
const fullSCH = [{ title: "All Films", label: "Full Schedule" }];
const firstDOW = startOfWeek(
  isThursday(today) && today.getHours() >= 20 ? addWeeks(today, 1) : today,
  { weekStartsOn: 5 }
);
const formatToday = format(today, "yyyy-MM-dd");
const formatTomorrow = format(tomorrow, "yyyy-MM-dd");
const tabs = [
  ...fullSCH,
  ...Array.from(Array(7)).map((e, i) => {
    const the_date = addDays(firstDOW, i);

    return {
      title: format(the_date, "yyyy-MM-dd"),
      label: format(the_date, "dd MMM yy"),
      date: format(the_date, "yyyy-MM-dd"),
    };
  }),
];

const Tabs = () => {
  const [loading, setLoading] = useState(true);
  const [dateSessions, setDateSessions] = useState([]);
  const [active, setActive] = useState(tabs[0]);

  const {
    sessionsFeed,
    setSessionsFeed,
    fetchSessions,
    fetchAllMovies,
    movieFeed,
    fetchList,
  } = useContext(MovieContext);

  useEffect(() => {
    fetchSessions();
    fetchAllMovies();
  }, [active]);

  useEffect(() => {
    const res = showFeed.filter(
      (item) =>
        !active.date ||
        new Date(item.PreShowStartTime).toJSON().slice(0, 10) === active.date
    );
    setDateSessions(res);
  }, [active, showFeed]);

  return (
    <>
      <TabsNav>
        <TabsContainer>
          {tabs.map((tab) => (
            <TabLink
              className={tab.date === formatToday ? "current" : ""}
              key={tab.label}
              active={active === tab}
              disabled={
                tab.date < formatToday ||
                (tab.date === formatToday && today.getHours() >= 20)
              }
              onClick={() => setActive(tab)}
            >
              {(() => {
                switch (tab.date) {
                  case formatToday:
                    return "Today";
                  case formatTomorrow:
                    return "Tomorrow";
                  default:
                    return tab.label;
                }
              })()}
              {/* {tab.label} */}
            </TabLink>
          ))}
        </TabsContainer>
      </TabsNav>
      <TabsContent>
        <>
          {(active.date && (
            <Card
              movies={filmFeed}
              sessions={dateSessions}
              date={active.date}
            />
          )) ||
            null}
          {/* {(active.date && <SessionList data={dateSessions} />) || null} */}
          {(!active.date && <FullSchedule data={movieFeed} />) || null}
        </>
      </TabsContent>
    </>
  );
};

export default Tabs;
