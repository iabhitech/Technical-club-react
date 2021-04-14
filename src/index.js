import react from "react";
import ReactDOM from "react-dom";
import Head from "./Head";
import Body from "./Body";
// import "./style.css";

const App = () => (
  <>
    <Head />
    <Body />
  </>
);
ReactDOM.render(<App />, document.getElementById("root"));
