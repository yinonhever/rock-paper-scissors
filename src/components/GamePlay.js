import React, { useState, useEffect } from "react";
import Zoom from "react-reveal/Zoom";
import PlayButton from "./PlayButton";
import EmptyCircle from "./EmptyCircle";
import Result from "./Result";

const GamePlay = props => {
    const [showHousePick, setShowHousePick] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [resultText, setResultText] = useState(null);
    const [userWon, setUserWon] = useState(false);
    const [houseWon, setHouseWon] = useState(false);
    const [columnMargin, setColumnMargin] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setShowHousePick(true);
        }, 1000)

        setTimeout(() => {
            setShowResult(true);
            if (props.result === "win") {
                setResultText("You win");
                setUserWon(true);
            }
            if (props.result === "lose") {
                setResultText("You lose");
                setHouseWon(true);
            }
            if (props.result === "draw") {
                setResultText("Draw");
            }
        }, 2000)
    }, [props.result])

    useEffect(() => {
        const adjustColumnMargin = () => {
            if (window.innerWidth > 1100) {
                setColumnMargin(showResult ? "17.6rem" : "3.65rem");
            }
            else {
                if (window.innerWidth <= 750) {
                    setColumnMargin(0);
                }
                else {
                    setColumnMargin("2.95rem");
                }
            }
        }
        adjustColumnMargin();
        window.addEventListener("resize", adjustColumnMargin);
    }, [showResult])

    return (
        <section className="play">
            <div className="play__column" style={{
                marginRight: columnMargin,
                transition: showResult ? "margin-right 0.4s" : null
            }}>
                <h2 className="play__heading">You picked</h2>
                <Zoom duration={600}>
                    <PlayButton big type={props.userPick} highlighted={userWon} />
                </Zoom>
            </div>
            {showResult ? <Result text={resultText} restart={props.onRestart} /> : null}
            <div className="play__column" style={{
                marginLeft: columnMargin,
                transition: showResult ? "margin-left 0.4s" : null
            }}>
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