import React, { Fragment, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "antd/dist/antd.css";
import "./index.css";

import Main from "./views/Main";

function App() {
  return (
    <Fragment>
      <Router>
        <Main />
      </Router>
    </Fragment>
  );
}

export default App;
