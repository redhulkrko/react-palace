import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { AppContextProvider } from './components/data/AppContext';
import { BrowserRouter } from 'react-router-dom';


  ReactDOM.render(
    <AppContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </AppContextProvider>,
    document.getElementById("root")
  );

