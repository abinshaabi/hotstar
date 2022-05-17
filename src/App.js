import React from "react";
import DefaultHOC from "./HOC/DefaultHOC";
import HomePage from "./Pages/Home.page";

import axios from 'axios'

//axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = "daf09f57e0848765d4794a0819c9fd58"


function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage} />
    </>
  );
}

export default App;
