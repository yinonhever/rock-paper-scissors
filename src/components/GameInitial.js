import React from "react";
import PlayButton from "./PlayButton";
import triangle from "../images/bg-triangle.svg";

const GameInitial = props => {
    return (
        <section className="initial">
            <div className="initial__top">
                <PlayButton type="paper" clickable clicked={props.onPick} />
                <PlayButton type="scissors" clickable clicked={props.onPick} />
            </div>
            <div className="initial__bottom">
                <PlayButton type="rock" clickable clicked={props.onPick} />
            </div>
            <div className="initial__triangle">

            </div>
        </section>
    )
}

export default GameInitial;