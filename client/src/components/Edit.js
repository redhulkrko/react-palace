import React, { useContext, useEffect, useState } from 'react';
import { MyTestStore } from "./App";
import { MovieContext } from './data/movieContext';
import {EditMovie, Preview, Layout} from './data/FormHandlers';
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import styled from "styled-components";
import { withRouter } from 'react-router-dom';
import Select from 'react-select';
import axios from 'axios';

// import "./xApp.css";

// import { Clear } from "@material-ui/icons";

// import { withRouter } from 'react-router-dom';
// import './style.css';

const MainContainer = styled.main`
  grid-area: main;
  display: grid;
  grid-template-columns: 1fr;
  margin: 0;
`;

const MovieForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 25%;
  height: 100vh;
  width: 100%;
  margin: 0;
`;

const MovieInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 60px;
  width: 100%;
  padding: 80px;
`;

const MoviePosters = styled.div`
  background: lightgrey;
  padding: 80px 40px;
`;

const PageTitle = styled.h2`
  grid-column: 1/4;
`;

const TitleInput = styled.div`
  grid-column: 1/3;
`;

const DateInput = styled.div`
  grid-column: 3/3;
`;

const SynopsisInput = styled.div`
  grid-column: 1/4;
`;

const IDInput = styled.div`
  grid-column: 3/4;
`;

const TrailerInput = styled.div`
  grid-column: 1/3;
`;

const CertInput = styled.div`
  grid-column: 1/2;
`;

const TimeInput = styled.div`
  grid-column: 2/3;
`;


const HideMe = styled.div`
  height: 470px;
  overflow-y: auto;
  overflow-x: hidden;
  background: gainsboro;
  border: 1px solid lavender;
`;


const Edit = (props) => {
  const { user, verified, setState } = useContext(MyTestStore);
  const [loading, setLoading] = useState(true);

  const { movie, setMovie, setApiMoveez, fetchMoveez, apiMoveez } = useContext(MovieContext);
  const { match } = props;
  const apiUrl = "http://localhost:5000/api/movies/" + props.match.params._id;

  const promise = fetchMoveez();

  useEffect(() => {
    setLoading(true)
    promise.then(movApi => {
      console.log(movApi)
      setApiMoveez(movApi)
      setLoading(false)
    });
  }, []);

  const optionsDefault = [
    { label: 'U', value: 'U' },
    { label: 'PG', value: 'PG' },
    { label: '12A', value: '12A' },
    { label: '15', value: '15' },
    { label: '18', value: '18' },
    { label: 'TBC', value: 'TBC' },
  ]

  const optionsNa = [{label: 'N/A', value: 'N/A'}];
  const optionsId = [...optionsNa, ...apiMoveez.map(vzMov => ({ label: vzMov.Title, value: vzMov.Id }))];



  console.log(movie);
  function onChangeRating(optionSelected) {
    setMovie({ ...movie, Rating: optionSelected.value })
  }  
  
  function onChangeId(optionIdSelected) {
    setMovie({ ...movie, Id: optionIdSelected.value })
  }


  useEffect(() => {
    async function fetchMovie() {
      const result = await axios(apiUrl);
      setMovie(result.data);      
      console.log(result.data);
      setLoading(false);
    }
    fetchMovie();
  }, []);

  const vCheck = apiMoveez.filter(x => x.Id === movie.Id).map(x => x.Title);
  console.log(vCheck);
  const selectedOption = {value: movie.Rating, label: movie.Rating};
  const selectedId = {value: movie.Id, label: (vCheck.length > 0) ? vCheck : 'N/A'};

  return (
    // <AppContext.Provider value={values}>

    <MainContainer>
      <MovieForm>
        <MovieInfo>
          {loading && <span className="sr-only">Loading...</span>}
          <PageTitle>Edit Movie</PageTitle>
          <TitleInput>
          <div className="wrapper">
            <span>Title</span>
            <input
              className="no-outline"
              type="text"
              name="Title"
              value={movie.Title}
              onChange={e => setMovie({ ...movie, Title: e.target.value })}
              placeholder="Film Title"
            />
          </div>
          </TitleInput>

          <DateInput>
          <div className="wrapper">
            <span>Date</span>
            <input
              className="no-outline"
              type="date"
              name="OpeningDate"
              value={movie.OpeningDate}
              onChange={e => setMovie({ ...movie, OpeningDate: e.target.value })}
            />
          </div>
          </DateInput>

          <SynopsisInput>
          <div className="wrapper">
            <span>Synopsis</span>
            <textarea
              className="no-outline"
              type="text"
              name="Synopsis"
              value={movie.Synopsis}
              onChange={e => setMovie({ ...movie, Synopsis: e.target.value })}
              placeholder="Synopsis"
            />
          </div>
          </SynopsisInput>

          <CertInput>
          <div class="wrapper-select">
          <Select name="Rating" options={optionsDefault} value={selectedOption} onChange={onChangeRating} />
				</div>
        </CertInput>          
        <TimeInput>
        <div className="wrapper">
            <span>Duration</span>
            <input
              className="no-outline"
              type="text"
              name="Duration"
              value={movie.Duration}
              onChange={e => setMovie({ ...movie, Duration: e.target.value })}
              placeholder="Duration"
            />
          </div>
        </TimeInput>

        <IDInput>
          <div class="wrapper-select">
          <Select name="Id" options={optionsId} value={selectedId} onChange={onChangeId} />
				</div>
        </IDInput>

          <TrailerInput>
          <div className="wrapper">
            <span>Trailer</span>
            <input
              className="no-outline"
              type="text"
              name="FilmTrailerUrl"
              value={movie.FilmTrailerUrl}
              onChange={e => setMovie({ ...movie, FilmTrailerUrl: e.target.value })}
              placeholder="Trailer URL"
            />
          </div>
          </TrailerInput>
        </MovieInfo>

        <MoviePosters>
        <Dropzone
      autoUpload={false}
      SubmitButtonComponent={props => <EditMovie {...props} match={match} />}
      PreviewComponent={Preview}
      LayoutComponent={Layout}
      onSubmit={() => {
        console.log("After submit?");
      }}
      inputContent="Drop Files (Custom Layout)"
    />
        </MoviePosters>
      </MovieForm>
    </MainContainer>
    // </AppContext.Provider>
  );
};

export default withRouter(Edit);