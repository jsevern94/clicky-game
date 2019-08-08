import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <nav className="navbar navbar-dark bg-info">
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