import React, { useState, useContext } from 'react';
import { MyTestStore } from './App';

import styled from "styled-components";

import axios from 'axios';

// import { withRouter } from 'react-router-dom';
// import './style.css';

import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
// import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
// import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
// import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

// // Register the plugins
// registerPlugin(FilePondPluginImageOverlay);

const MainContainer = styled.main`
grid-area: main;
display:grid;
  grid-template-columns: 1fr;
  margin: 0;
  padding: 80px;
`;

const Updates = styled.div`
  grid-area: updates;
  box-shadow: 0 1px 0 0 #eaedf3;
  background: purple;
`;



const Create = (props) => {
  const {user, verified, setState} = useContext(MyTestStore)

    const initialState = { id: '', title: '', synopsis: '', trailer: '', date: '' }
    const [movie, setMovie] = useState(initialState) 
    const [posterCollection, setPosterCollection] = useState('');
    const [showLoading, setShowLoading] = useState(false);
    const apiUrl = "http://localhost:5000/api/movies/";

  const saveMovie = (e) => {
    setShowLoading(true);
    e.preventDefault();
    const formData = new FormData();
    formData.set("title", movie.title);
    formData.set("synopsis", movie.synopsis);
    formData.set("trailer", movie.trailer);
    formData.set("id", movie.id);
    formData.set("date", movie.date);
  
    for (let img in posterCollection[0]) {
      formData.append("posters", posterCollection[0][img])
    }
    const headers = "multipart/form-data"
      axios.post(apiUrl, formData, headers)
      .then((result) => {
        setShowLoading(false);
        console.log(result);
        props.history.push('/show/' + result.data.movie._id)
      }).catch((error) => setShowLoading(false));
  };

  const onChange = (e) => {
    e.persist();
    setMovie({...movie, [e.target.name]: e.target.value})
}

const onFileChange = (files) => {
    let items = files.map(fileItem => fileItem.file)
    setPosterCollection([...posterCollection, ...items])
}

  return (
    <>
       <MainContainer>
      {showLoading && <span className="sr-only">Loading...</span>}    
            <h2 className="title">Add Movie</h2>
            <form onSubmit={saveMovie}>
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



            <div className="upload-wrapper">
            <div className="p-t-15">
                <button className="btn btn--radius-2 btn--blue" type="submit">Submit</button>
            </div>
            <div className="form-input full">
                <FilePond
                name='posters'
                files={posterCollection}
                allowMultiple={true}
                server={null}
                instantUpload={false}
                onupdatefiles={(fileItems) => onFileChange(fileItems)}
                />
            </div>
                    

            </div>
            </form>
        </MainContainer>
        <Updates/>
    </>
  );
}

export default Create;