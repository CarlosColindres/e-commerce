import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from 'react-redux'
import { BrowserRouter as Router } from "react-router-dom";

import "./scss/main.scss";

ReactDOM.render(
  <Provider>
  <Router>
    <App />
  </Router>
  </Provider>
  ,
  document.getElementById("root")
);
