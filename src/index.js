/* importing React packages from react and react-dom and also importing 
a user defined component and a variable from APP.js*/
import React from "react";
import ReactDOM from "react-dom";
import { compArray, Display } from "./App";

// rendering Display component with compArray value passed to it
ReactDOM.render(
  <Display compArray={compArray} />,
  document.getElementById("root")
);
