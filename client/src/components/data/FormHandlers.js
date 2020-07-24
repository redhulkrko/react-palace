import React, { useContext } from 'react';
import { AppContext } from './AppContext';
import styled from "styled-components";
import axios from "axios";

import { Clear } from "@material-ui/icons";

const HideMe = styled.div`
  height: 470px;
  overflow-y: auto;
  overflow-x: hidden;
  background: gainsboro;
  border: 1px solid lavender;
`;

const SubmitMovie = props => {
  const { files, onSubmit } = props;
  const { movie, setMovie, setShowLoading, resetMovie } = useContext(AppContext);

  const handleSubmit = () => {
    console.log({ movie });
    console.log(files.map(f => f.meta));
    const apiUrl = "https://palace-cinema.herokuapp.com/api/movies/";
    const headers = "multipart/form-data";
    const formData = new FormData();
    formData.set("Title", movie.Title);
    formData.set("OpeningDate", movie.OpeningDate);
    formData.set("Synopsis", movie.Synopsis);
    formData.set("Id", movie.Id);
    formData.set("FilmTrailerUrl", movie.FilmTrailerUrl);
    formData.set("Rating", movie.Rating);
    formData.set("Duration", movie.Duration);

    files.map(fileItem => formData.append("poster", fileItem.file));

    console.log(Array.from(formData));
    axios
      .post(apiUrl, formData, headers)
      .then(result => {
        setShowLoading(false);
        console.log(result);
        setMovie({});
        props.history.push("/show/" + result.data.movie._id);
      })
      .catch(error => setShowLoading(false));
    onSubmit();
  };
  return (
    <div className="dzu-submitButtonContainer">
      <button onClick={handleSubmit} className="dzu-submitButton">
        Submit
      </button>
    </div>
  );
};

const EditMovie = (props) => {
    const { files, onSubmit } = props;
    const { movie, setShowLoading, setMovie, resetMovie } = useContext(AppContext);
    const apiUrl = "https://palace-cinema.herokuapp.com/api/movies/" + props.match.params._id;
  
  
  
    const handleSubmit = () => {
      console.log({ movie });
      console.log(files.map(f => f.meta));
  
      const headers = "multipart/form-data";
      const formData = new FormData();
      formData.set("Title", movie.Title);
      formData.set("OpeningDate", movie.OpeningDate);
      formData.set("Synopsis", movie.Synopsis);
      formData.set("Id", movie.Id);
      formData.set("FilmTrailerUrl", movie.FilmTrailerUrl);
      formData.set("Rating", movie.Rating);
      formData.set("Duration", movie.Duration);
  
      files.map(fileItem => formData.append("poster", fileItem.file));
  
      console.log(Array.from(formData));
      axios
        .post(apiUrl, formData, headers)
        .then(result => {
          setShowLoading(false);
          console.log(result);
          setMovie({});
          props.history.push("/show/" + result.data.movie._id);
        })
        .catch(error => setShowLoading(false));
      onSubmit();
    };
    return (
      <div className="dzu-submitButtonContainer">
        <button onClick={handleSubmit} className="dzu-submitButton">
          Submit
        </button>
      </div>
    );
  };

  
  const Preview = ({ meta, fileWithMeta }) => {
    const { previewUrl, name, status, percent } = meta;
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
  
    return (
      <div className="dzu-previewContainer">
        <img class="dzu-previewImage" src={previewUrl} alt={name} title={name} />
        {status === 'done' ? <Clear onClick={fileWithMeta.remove} /> : ""}
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
      <div>
        <div>
          {submitButton}
          <HideMe>
            <div  {...dropzoneProps}>
            {previews}
            {files.length < maxFiles && input}
            </div>
          </HideMe>
        </div>
      </div>
    );
  };
  
  export {SubmitMovie, EditMovie, Preview, Layout};
