import React, { useContext, useEffect, useRef } from "react";
import { MyTestStore } from "./App";
import { AppContext } from './data/Context';
import {SubmitMovie, Preview, Layout} from './data/FormHandlers';
import "react-dropzone-uploader/dist/styles.css";
import Select from 'react-select';


import Dropzone from "react-dropzone-uploader";
import styled from "styled-components";
import axios from "axios";
// import "./xApp.css";

import { Clear } from "@material-ui/icons";

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

// const Submit = props => {
//   const { files, onSubmit } = props;
//   const { movie, setShowLoading } = useContext(AppContext);
//   const handleSubmit = () => {
//     console.log({ movie });
//     console.log(files.map(f => f.meta));
//     const apiUrl = "http://localhost:5000/api/movies/";
//     const headers = "multipart/form-data";
//     const formData = new FormData();
//     formData.set("Title", movie.Title);
//     formData.set("OpeningDate", movie.OpeningDate);
//     formData.set("Synopsis", movie.Synopsis);
//     formData.set("Id", movie.Id);
//     formData.set("FilmTrailerUrl", movie.FilmTrailerUrl);
//     formData.set("Rating", movie.Rating);
//     formData.set("Duration", movie.Duration);

//     files.map(fileItem => formData.append("poster", fileItem.file));

//     console.log(Array.from(formData));
//     axios
//       .post(apiUrl, formData, headers)
//       .then(result => {
//         setShowLoading(false);
//         console.log(result);
//         props.history.push("/show/" + result.data.movie._id);
//       })
//       .catch(error => setShowLoading(false));
//     onSubmit();
//   };
//   return (
//     <div className="dzu-submitButtonContainer">
//       <button onClick={handleSubmit} className="dzu-submitButton">
//         Submit
//       </button>
//     </div>
//   );
// };

// const Preview = ({ meta, fileWithMeta }) => {
//   const { previewUrl, name, status, percent } = meta;
  // const { uploadPercentage, setUploadPercentage } = useContext(AppContext);
  // const timeout = useRef();
  // console.log({ status });
  // useEffect(() => {
  //   const time = 10000;
  //   if (uploadPercentage < 100) {
  //     timeout.current = setTimeout(() => {
  //       setUploadPercentage(uploadPercentage => uploadPercentage + 1);
  //     }, time / 1000);
  //   }

  //   return () => clearTimeout(timeout.current);
  // }, []);
  // console.log(uploadPercentage);

//   return (
//     <div className="dzu-previewContainer">
//       <img class="dzu-previewImage" src={previewUrl} alt={name} title={name} />
//       {status === 'done' ? <Clear onClick={fileWithMeta.remove} /> : ""}
//     </div>
//   );
// };

// const Layout = ({
//   input,
//   previews,
//   submitButton,
//   dropzoneProps,
//   files,
//   extra: { maxFiles }
// }) => {
//   return (
//     <div>
//       <div>
//         {submitButton}
//         <HideMe>
//           <div  {...dropzoneProps}>
//           {previews}
//           {files.length < maxFiles && input}
//           </div>
//         </HideMe>
//       </div>
//     </div>
//   );
// };

// const MyUploader = () => {
//   return (
//     <Dropzone
//       autoUpload={false}
//       SubmitButtonComponent={Submit}
//       PreviewComponent={Preview}
//       LayoutComponent={Layout}
//       onSubmit={() => {
//         console.log("After submit?");
//       }}
//       inputContent="Drop Files (Custom Layout)"
//     />
//   );
// };

const Create = () => {
  const { user, verified, setState } = useContext(MyTestStore);

  const { movie, setMovie, showLoading } = useContext(AppContext);

  const optionsDefault = [
    { label: 'U', value: 'U' },
    { label: 'PG', value: 'PG' },
    { label: '12A', value: '12A' },
    { label: '15', value: '15' },
    { label: '18', value: '18' },
    { label: 'TBC', value: 'TBC' },
  ]

  function onChangeFunc(optionSelected) {
    setMovie({ ...movie, Rating: optionSelected.value })
  }

  return (
    // <AppContext.Provider value={values}>

    <MainContainer>
      <MovieForm>
        <MovieInfo>
          {showLoading && <span className="sr-only">Loading...</span>}
          <PageTitle>Add Movie</PageTitle>
          <TitleInput>
          <div className="wrapper">
            <span>Title</span>
            <input
              className="no-outline"
              type="text"
              name="Title"
              defaultValue={movie.Title}
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
              defaultValue={movie.OpeningDate}
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
              defaultValue={movie.Synopsis}
              onChange={e => setMovie({ ...movie, Synopsis: e.target.value })}
              placeholder="Synopsis"
            />
          </div>
          </SynopsisInput>

          <CertInput>
          <div class="wrapper-select">
          <Select name="Rating" options={optionsDefault} defaultValue={movie.Rating} onChange={onChangeFunc} />
				</div>
        </CertInput>          
        <TimeInput>
        <div className="wrapper">
            <span>Duration</span>
            <input
              className="no-outline"
              type="text"
              name="Duration"
              defaultValue={movie.Duration}
              onChange={e => setMovie({ ...movie, Duration: e.target.value })}
              placeholder="Duration"
            />
          </div>
        </TimeInput>

          <IDInput>
          <div className="wrapper">
            <span>Movie ID</span>
            <input
              className="no-outline"
              type="text"
              name="Id"
              defaultValue={movie.Id}
              onChange={e => setMovie({ ...movie, Id: e.target.value })}
              placeholder="Veezi Film ID"
            />
          </div>
          </IDInput>

          <TrailerInput>
          <div className="wrapper">
            <span>Trailer</span>
            <input
              className="no-outline"
              type="text"
              name="FilmTrailerUrl"
              defaultValue={movie.FilmTrailerUrl}
              onChange={e => setMovie({ ...movie, FilmTrailerUrl: e.target.value })}
              placeholder="Trailer URL"
            />
          </div>
          </TrailerInput>

         
        </MovieInfo>

        <MoviePosters>
        <Dropzone
      autoUpload={false}
      SubmitButtonComponent={SubmitMovie}
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

export default Create;
