import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <nav className="navbar navbar-light bg-danger">
            <a className="navbar-brand" href="/">
                Clicky Game
            </a>
            <span className="navbar-text">
                Score: {props.score} | Top Score: {props.topScore}
            </span>
        </nav>
    );
}

export default Navbar;