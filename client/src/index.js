import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { AppContextProvider } from './components/data/Context';
import { BrowserRouter } from 'react-router-dom';


  ReactDOM.render(
    <AppContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </AppContextProvider>,
    document.getElementById("root")
  );

