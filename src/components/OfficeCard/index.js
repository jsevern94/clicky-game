import React from "react";
import "./style.css";

function OfficeCard(props) {
    return (
        <a href="#wrapper">
            <div onClick={() => props.handleClick(props.id)} className= {`imageCard ${props.incorrect}`}>
                <img className="image" alt={props.name} src={props.image} />
            </div>
        </a>
    );
}

export default OfficeCard;