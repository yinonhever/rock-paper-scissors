import React, { useState, useEffect } from "react";
import rock from "../images/icon-rock.svg";
import paper from "../images/icon-paper.svg";
import scissors from "../images/icon-scissors.svg";
import lizard from "../images/icon-lizard.svg";
import spock from "../images/icon-spock.svg";

const PlayButton = props => {
    const [highlighted, setHighlighted] = useState(false);

    let icon = "";
    if (props.type === "rock") { icon = rock; }
    if (props.type === "paper") { icon = paper; }
    if (props.type === "scissors") { icon = scissors; }
    if (props.type === "lizard") { icon = lizard; }
    if (props.type === "spock") { icon = spock; }

    let classes = ["play-button", props.type];
    if (props.big) {
        classes = [...classes, "big"];
    }

    useEffect(() => {
        setHighlighted(props.highlighted);
    }, [props.highlighted])

    const clickHandler = () => {
        if (props.clicked) {
            props.clicked(props.type);
        }
    }

    return (
        <div className={classes.join(" ")} onClick={clickHandler} style={{
            cursor: props.clicked ? "pointer" : null
        }}>
            <div className="play-button__inner">
                <img className="play-button__icon" src={icon} alt={props.type} />
            </div>
            {highlighted ? <div className="play-button__backdrop" /> : null}
        </div>
    )
}

export default PlayButton;