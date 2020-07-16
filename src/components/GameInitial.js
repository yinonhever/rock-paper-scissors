import React from "react";
import PlayButton from "./PlayButton";
import triangle from "../images/bg-triangle.svg";

const GameInitial = props => (
    <section className="initial">
        <div className="initial__top">
            <PlayButton type="paper" clicked={props.onPick} />
            <PlayButton type="scissors" clicked={props.onPick} />
        </div>
        <div className="initial__bottom">
            <PlayButton type="rock" clicked={props.onPick} />
        </div>
        <div className="initial__triangle">
            <img src={triangle} alt="triangle" />
        </div>
    </section>
)

export default GameInitial;