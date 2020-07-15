import React, { useState, useEffect } from "react";
import rock from "../images/icon-rock.svg";
import paper from "../images/icon-paper.svg";
import scissors from "../images/icon-scissors.svg";

const PlayButton = props => {
    const [highlighted, setHighlighted] = useState(false);

    let icon = "";
    if (props.type === "rock") { icon = rock; }
    else if (props.type === "paper") { icon = paper; }
    else if (props.type === "scissors") { icon = scissors; }

    let classes = ["play-button", props.type];
    if (props.big) {
        classes = [...classes, "big"];
    }

    useEffect(() => {
        setHighlighted(props.highlighted);
    }, [props.highlighted])

    const clickHandler = () => {
        if(props.clickable) {
            props.clicked(props.type);
        }
    }

    return (
        <div className={classes.join(" ")} onClick={clickHandler} style={{
            cursor: props.clickable ? "pointer" : null
        }}>
            <div className="play-button__inner">
                <img className="play-button__icon" src={icon} alt={props.type} />
            </div>
            {highlighted ? <div className="play-button__backdrop" /> : null}
        </div>
    )
}

export default PlayButton;