import React, { useState, useEffect } from "react";
import Zoom from "react-reveal/Zoom";
import PlayButton from "./PlayButton";
import EmptyCircle from "./EmptyCircle";
import Result from "./Result";

const GamePlay = props => {
    const [showHousePick, setShowHousePick] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [userWon, setUserWon] = useState(false);
    const [houseWon, setHouseWon] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowHousePick(true);
        }, 1000)

        setTimeout(() => {
            setShowResult(true);
            if (props.result === "win") { setUserWon(true) };
            if (props.result === "lose") { setHouseWon(true) };
        }, 2000)
    }, [props.result])

    let resultText = "";
    if (props.result === "win") { resultText = "You win" };
    if (props.result === "lose") { resultText = "You lose" };
    if (props.result === "draw") { resultText = "Draw" };

    return (
        <section className="play">
            <div className="play__column" style={{ marginRight: showResult ? 0 : "7.3rem" }}>
                <h2 className="play__heading">You picked</h2>
                <Zoom duration={600}>
                    <PlayButton big type={props.userPick} highlighted={userWon} />
                </Zoom>
            </div>
            {showResult ? <Result text={resultText} restart={props.onRestart} /> : null}
            <div className="play__column">
                <h2 className="play__heading">The house picked</h2>
                {showHousePick ?
                    <Zoom duration={600}>
                        <PlayButton big type={props.housePick} highlighted={houseWon} />
                    </Zoom>
                    : <EmptyCircle />}
            </div>
        </section>
    )
}

export default GamePlay;