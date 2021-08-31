import React, { Fragment } from "react";
import Card from "./card";
import NavBar from "./navbar";
// const screenfull = require("screenfull");

const MainContent = () => {
  // useEffect(() => {
  //   if (screenfull.isEnabled) {
  //     screenfull.request();
  //   }
  // });

  return (
    <Fragment>
      <NavBar />
      <div className="bg-light py-4 px-5" style={{ minHeight: "90vh" }}>
        <Card />
        <Card />
        <Card />
      </div>
    </Fragment>
  );
};

export default MainContent;
