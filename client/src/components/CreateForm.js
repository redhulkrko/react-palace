import React, { useState, useContext } from "react";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import axios from 'axios';
const movieData = { title: "" };
const moviePosters = [];

const AppContext = React.createContext();

const Submit = props => {
  const { files, onSubmit } = props;
  const { movie, posterCollection, setPosterCollection, setShowLoading } = useContext(
    AppContext
  );
  const handleSubmit = (e) => {
    // console.log({ movie });
    // console.log(files.map(f => f.meta));
    setShowLoading(true);
    e.preventDefault();
    const apiUrl = "http://localhost:5000/api/movies/";
    const headers = "multipart/form-data";
    const formData = new FormData();
    formData.set("title", movie.title);
    let items = files.map(fileItem => fileItem.file);
    // setPosterCollection([...posterCollection, ...items]);
    for (let img in items[0]) {
      formData.append("posters", items[0][img]);
    }
    console.log(Array.from(formData));

    axios.post(apiUrl, formData, headers)
    .then((result) => {
      setShowLoading(false);
      console.log(result);
      props.history.push('/show/' + result.data.movie._id)
    }).catch((error) => setShowLoading(false));

    // allFiles.forEach(f => f.remove());
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

const Layout = ({
  input,
  previews,
  submitButton,
  dropzoneProps,
  files,
  extra: { maxFiles }
}) => {
  const { movie, setMovie } = useContext(AppContext);

  return (
    <div>
      <div>
        <input
          type="text"
          name="title"
          onChange={e => setMovie({ ...movie, title: e.target.value })}
          defaultValue={movie.title}
        />
      </div>
      <div>
        {submitButton}
        <div {...dropzoneProps}>
          {previews}
          {files.length < maxFiles && input}
        </div>
      </div>
    </div>
  );
};

const Input = () => {
  return (
    <input style={{ display: "none" }} type="file" multiple name="posters" />
  );
};

const CustomLayout = () => {
  const getUploadParams = () => ({ url: "http://localhost:5000/api/movies/" });

  const [movie, setMovie] = useState(movieData);
  const [posterCollection, setPosterCollection] = useState(moviePosters);
  const [showLoading, setShowLoading] = useState(false);


  const values = {
    movie,
    setMovie,
    posterCollection,
    setPosterCollection,
    showLoading,
    setShowLoading
  };

  return (
    <AppContext.Provider value={values}>
      <Dropzone
        inputComponent={Input}
        getUploadParams={getUploadParams}
        SubmitButtonComponent={Submit}
        LayoutComponent={Layout}
        onSubmit={() => {
          console.log("After submit?");
        }}
        inputContent="Drop Files (Custom Layout)"
      />
    </AppContext.Provider>
  );
};

export default CustomLayout;
