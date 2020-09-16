/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles.css";
import App from "./components/App";
import{ BrowserRouter as Router } from "react-router-dom";
/* eslint-enable no-unused-vars */


ReactDOM.render(

    <React.StrictMode>
        <Router>
            <App/>
        </Router>
    </React.StrictMode>,
    document.getElementById("root"),
);
