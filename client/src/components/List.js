import React, { useContext, useEffect, useState, useMemo } from 'react';
import { MovieContext } from './data/movieContext';
import axios from 'axios';
// import { withRouter } from 'react-router-dom';
import styled from "styled-components";
import ListRow from './ListRow';

const AdminList = styled.ul`
  list-style: none;
  margin: 1rem 0;
`;

const Tab = styled.button`
  font-size: 1em;
  padding: 5px 20px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  ${({ active }) =>
    active &&`
    border-bottom: 2px solid purple;
    opacity: 1;
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const tabs = [
  {
    title: "Now Showing",
    label: "Now",
    content: date => item =>
      date > Date.parse(item.OpeningDate.substring(0, 10))
  },
  {
    title: "Coming Soon",
    label: "Soon",
    content: date => item =>
      date < Date.parse(item.OpeningDate.substring(0, 10))
  }
];

const List = () => {
  const [active, setActive] = useState(tabs[0]);

  const { movieFeed, setMovieFeed, loading, setLoading } = useContext(MovieContext);
  const date = new Date();

  

  let active_films = useMemo(() => {
    let all_films = movieFeed.filter(active.content(date));

    return all_films;
  }, [movieFeed, active, date]);

  const apiUrl = "http://palace-cinema.herokuapp.com/api/movies";

  useEffect(() => {
    async function fetchMovies() {
      const result = await axios(apiUrl);
      setMovieFeed(result.data);      
      setLoading(false);
    }
    fetchMovies();
  }, []); 

  return (
    <div>
    {loading && <span className="sr-only">Loading...</span>}   
    <div className="tab-menu">
            <ButtonGroup>
              {tabs.map(tab => (
                <Tab
                  key={tab.label}
                  active={active === tab}
                  onClick={() => setActive(tab)}
                >
                  {tab.label}
                </Tab>
              ))}
            </ButtonGroup>
        </div> 
      <AdminList>
        {active_films.map((res, i) => {
          return <ListRow obj={res} key={i} />;
        })}
      </AdminList>
    </div>         

  );
}

export default List;