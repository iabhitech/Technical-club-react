import ReactDOM from "react-dom";
import Head from "./Component/Head";
import Body from "./Component/Body";
import React from "react"

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import "./App.css"
// import $ from 'jquery';
// import Popper from 'popper.js';

const App = () => (
  <>
    <Head />
    <Body />
  </>
);
ReactDOM.render(<App />, document.getElementById("root"));
