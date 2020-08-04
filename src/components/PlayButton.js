import React from "react";
import rock from "../images/icon-rock.svg";
import paper from "../images/icon-paper.svg";
import scissors from "../images/icon-scissors.svg";
import lizard from "../images/icon-lizard.svg";
import spock from "../images/icon-spock.svg";

const PlayButton = props => {
    const icons = {
        rock: rock,
        paper: paper,
        scissors: scissors,
        lizard: lizard,
        spock: spock
    }

    let classes = ["play-button", props.type];
    if (props.big) {
        classes = [...classes, "big"];
    }

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
                <img className="play-button__icon" src={icons[props.type]} alt={props.type} />
            </div>
            {props.highlighted ? <div className="play-button__backdrop" /> : null}
        </div>
    )
}

export default PlayButton;