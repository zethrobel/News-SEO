import React from "react";
import ReactDom from "react-dom"
import App from "./component/App";


const root= ReactDom.createRoot(document.getElementById("root"))

root.render(<App />);

//ReactDom.render(<App />, document.getElementById("roots"))