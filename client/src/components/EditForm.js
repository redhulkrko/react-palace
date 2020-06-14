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



// const Submit = props => {
//   const { files, onSubmit } = props;
//   const { movie, setShowLoading, setMovie } = useContext(AppContext);
//   const apiUrl = "http://localhost:5000/api/movies/" + props.match.params._id;

//   useEffect(() => {
//     setShowLoading(false);
//     const fetchData = async () => {
//       const result = await axios(apiUrl);
//       setMovie(result.data);      
//       console.log(result.data);
//       setShowLoading(false);
//     };

//     fetchData();
//   }, [apiUrl]);
//   const handleSubmit = () => {
//     console.log({ movie });
//     console.log(files.map(f => f.meta));

//     const headers = "multipart/form-data";
//     const formData = new FormData();
//     formData.set("title", movie.title);
//     formData.set("date", movie.date);
//     formData.set("synopsis", movie.synopsis);
//     formData.set("vID", movie.vID);
//     formData.set("trailer", movie.trailer);

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
              name="title"
              defaultValue={movie.title}
              onChange={e => setMovie({ ...movie, title: e.target.value })}
              placeholder="Film Title"
            />
          </div>

          <div className="wrapper">
            <span>Date</span>
            <input
              className="no-outline"
              type="date"
              name="date"
              defaultValue={movie.date}
              onChange={e => setMovie({ ...movie, date: e.target.value })}
            />
          </div>

          <div className="wrapper">
            <span>Synopsis</span>
            <textarea
              className="no-outline"
              type="text"
              name="synopsis"
              defaultValue={movie.synopsis}
              onChange={e => setMovie({ ...movie, synopsis: e.target.value })}
              placeholder="Synopsis"
            />
          </div>

          <div className="wrapper">
            <span>Movie ID</span>
            <input
              className="no-outline"
              type="text"
              name="vID"
              defaultValue={movie.id}
              onChange={e => setMovie({ ...movie, vID: e.target.value })}
              placeholder="Veezi Film ID"
            />
          </div>

          <div className="wrapper">
            <span>Trailer</span>
            <input
              className="no-outline"
              type="text"
              name="trailer"
              defaultValue={movie.trailer}
              onChange={e => setMovie({ ...movie, trailer: e.target.value })}
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