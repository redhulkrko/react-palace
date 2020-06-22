import React, { useContext, useEffect } from 'react';
import { MyTestStore } from "./App";
import { AppContext } from './context';
import {Submit, Preview, Layout} from './FormHandlers';
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import styled from "styled-components";
import { withRouter } from 'react-router-dom';
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
  padding: 80px;
`;

const MoviePosters = styled.div`
  background: lightgrey;
  padding: 80px 40px;
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
  const { movie, setMovie, showLoading, setShowLoading } = useContext(AppContext);
  const { match } = props;
  const apiUrl = "http://localhost:5000/api/movies/" + props.match.params._id;


  useEffect(() => {
    async function fetchMovie() {
      const result = await axios(apiUrl);
      setMovie(result.data);      
      console.log(result.data);
      setShowLoading(false);
    }
    fetchMovie();
  }, []); 
  

  return (
    // <AppContext.Provider value={values}>

    <MainContainer>
      <MovieForm>
        <MovieInfo>
          {showLoading && <span className="sr-only">Loading...</span>}
          <h2 className="title">Add Movie</h2>
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

          <div className="wrapper">
            <span>Movie ID</span>
            <input
              className="no-outline"
              type="text"
              name="Id"
              value={movie.Id}
              onChange={e => setMovie({ ...movie, Id: e.target.value })}
              placeholder="Veezi Film ID"
            />
          </div>

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
        </MovieInfo>

        <MoviePosters>
        <Dropzone
      autoUpload={false}
      SubmitButtonComponent={props => <Submit {...props} match={match} />}
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