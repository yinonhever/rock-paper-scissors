import React from "react";
import Zoom from "react-reveal/Zoom";
import PlayButton from "./PlayButton";
import pentagon from "../images/bg-pentagon.svg";

const GameInitial = props => (
    <section className="initial">
        <div className="initial__top">
            <Zoom duration={200}>
                <PlayButton type="scissors" clicked={props.onPick} />
            </Zoom>
        </div>
        <div className="initial__middle">
            <Zoom duration={200} delay={800}>
                <PlayButton type="spock" clicked={props.onPick} />
            </Zoom>
            <Zoom duration={200} delay={200}>
                <PlayButton type="paper" clicked={props.onPick} />
            </Zoom>
        </div>
        <div className="initial__bottom">
            <Zoom duration={200} delay={600}>
                <PlayButton type="lizard" clicked={props.onPick} />
            </Zoom>
            <Zoom duration={200} delay={400}>
                <PlayButton type="rock" clicked={props.onPick} />
            </Zoom>
        </div>
        <div className="initial__shape">
            <img src={pentagon} alt="pentagon" />
        </div>
    </section>
)

export default GameInitial;