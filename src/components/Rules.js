import React from "react";
import rules from "../images/image-rules.svg";

const Rules = props => (
    <div className={props.active ? "rules active" : "rules"}>
        <div className="rules__content">
            <div className="rules__top-row">
                <h2 className="rules__heading">Rules</h2>
                <i className="rules__close fas fa-times" onClick={props.closed} />
            </div>
            <img className="rules__img" src={rules} alt="rules" />
        </div>
    </div>
)

export default Rules;