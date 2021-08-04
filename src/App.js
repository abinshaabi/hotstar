import React from "react";
import DefaultHOC from "./HOC/DefaultHOC";
import HomePage from "./Pages/Home.page";


function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage} />
    </>
  );
}

export default App;
