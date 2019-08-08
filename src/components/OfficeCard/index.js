import React from "react";
import "./style.css";

function OfficeCard(props) {
    return (
        <div onClick={() => props.handleClick(props.id)} className="imageCard">
            <img alt={props.name} src={props.image} />
            {/* <span className="nameSpan">
                {props.name}
            </span> */}
        </div>
    );
}

export default OfficeCard;