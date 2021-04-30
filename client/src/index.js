import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import { AppContextProvider } from './components/data/AppContext';
import { MovieProvider } from "./components/data/movieContext";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <MovieProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MovieProvider>,
  document.getElementById("root")
);
