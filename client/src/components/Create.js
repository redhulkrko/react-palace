import React, { useState, useContext } from 'react';
import { MyTestStore } from './App';
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import styled from "styled-components";

import axios from 'axios';

// import { withRouter } from 'react-router-dom';
// import './style.css';



const MainContainer = styled.main`
grid-area: main;
display:grid;
  grid-template-columns: 1fr;
  margin: 0;
`;

const MovieForm = styled.form`
display: grid;
grid-template-columns: 1fr 25%;
height: 100vh;
width: 100%;
margin:0;
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



const Create = (props) => {
  const {user, verified, setState} = useContext(MyTestStore)

    const initialState = { id: '', title: '', synopsis: '', trailer: '', date: '' }
    const [movie, setMovie] = useState(initialState) 
    const [posterCollection, setPosterCollection] = useState('');
    const [showLoading, setShowLoading] = useState(false);
    const apiUrl = "http://localhost:5000/api/movies/";

  // const saveMovie = (e) => {
  //   setShowLoading(true);
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.set("title", movie.title);
  //   formData.set("synopsis", movie.synopsis);
  //   formData.set("trailer", movie.trailer);
  //   formData.set("id", movie.id);
  //   formData.set("date", movie.date);
  
  //   for (let img in posterCollection[0]) {
  //     formData.append("posters", posterCollection[0][img])
  //   }
  //   const headers = "multipart/form-data"
  //     axios.post(apiUrl, formData, headers)
  //     .then((result) => {
  //       setShowLoading(false);
  //       console.log(result);
  //       props.history.push('/show/' + result.data.movie._id)
  //     }).catch((error) => setShowLoading(false));
  // };

  const onChange = (e) => {
    e.persist();
    setMovie({...movie, [e.target.name]: e.target.value})
    console.log(movie.title)
}

const Submit = props => {
  const { e, files, onSubmit, movie } = props;

  const handleSubmit = () => {
    e.preventDefault();
    console.log(files.map(f => f.meta));
    console.log(movie);
    onSubmit();
    // allFiles.forEach(f => f.remove());
  };
  return (
    <div className="dzu-submitButtonContainer">
      <button onClick={handleSubmit} className="dzu-submitButton">
        Submit
      </button>
    </div>
  );
};

const Layout = ({
  input,
  previews,
  submitButton,
  dropzoneProps,
  files,
  extra: { maxFiles }
}) => {
  return (
    <>
    {submitButton}
    <HideMe>
      <div {...dropzoneProps}>{previews}{files.length < maxFiles && input}</div>
    </HideMe>
    </>
  );
};




const MyUploader = () => {
  const getUploadParams = () => ({ url: "https://httpbin.org/post" });

  return (
    <Dropzone
      getUploadParams={getUploadParams}
      SubmitButtonComponent={Submit}
      LayoutComponent={Layout}
      onSubmit={() => {
        console.log("After submit?");
      }}
    />
  );
};

// const onFileChange = (files) => {
//     let items = files.map(fileItem => fileItem.file)
//     setPosterCollection([...posterCollection, ...items])
// }

  return (
    <>
       <MainContainer>

            <MovieForm>
              
            <MovieInfo>
            {showLoading && <span className="sr-only">Loading...</span>}    
            <h2 className="title">Add Movie</h2>
            <div className="wrapper">
              <span>Title</span>
                  <input className="no-outline" type="text" name="title" value={movie.title} onChange={onChange} placeholder="Film Title"  />
            </div>

            <div className="wrapper">
            <span>Date</span>
                <input className="no-outline" type="date" name="date" value={movie.date} onChange={onChange} />
            </div>
            
            <div className="wrapper">
            <span>Synopsis</span>
                  <textarea className="no-outline" type="text" name="synopsis" value={movie.synopsis} onChange={onChange} placeholder="Synopsis"></textarea>
            </div>
            
            <div className="wrapper">
            <span>Movie ID</span>
                <input className="no-outline" type="text" name="id" value={movie.id} onChange={onChange} placeholder="Veezi Film ID" />
            </div>
            
       
            <div className="wrapper">
            <span>Trailer</span>
                  <input className="no-outline" type="text" name="trailer" value={movie.trailer} onChange={onChange} placeholder="Trailer URL" />
            </div>

            </MovieInfo>
           
           <MoviePosters>
                <MyUploader/>
            </MoviePosters>       

            </MovieForm>
        </MainContainer>
    </>
  );
}

export default Create;