import React, { useState } from "react";
import usePersistedState from "../utility/usePersistedState";
import determineResult from "../utility/determineResult";
import Layout from "../hoc/Layout";
import Header from "./Header";
import GameInitial from "./GameInitial";
import GamePlay from "./GamePlay";
import Button from "./Button";
import Rules from "./Rules";

const Game = () => {
    const [score, setScore] = usePersistedState("score", 0);
    const [started, setStarted] = useState(false);
    const [userPick, setUserPick] = useState(null);
    const [housePick, setHousePick] = useState(null);
    const [result, setResult] = useState(null);
    const [modalActive, setModalActive] = useState(false);

    const gamePlayHandler = newUserPick => {
        setStarted(true);
        setUserPick(newUserPick);

        const options = ["rock", "paper", "scissors"];
        const random = Math.floor(Math.random() * options.length);
        const newHousePick = options[random];
        setHousePick(newHousePick);

        const newResult = determineResult(newUserPick, newHousePick);
        setResult(newResult);
        setTimeout(() => {
            if (newResult === "win") { setScore(score + 1) };
            if (newResult === "lose") { setScore(score - 1) };
        }, 2500)
    }

    const restartHandler = () => {
        setStarted(false);
    }

    const modalHandler = () => {
        setModalActive(!modalActive);
    }

    return (
        <Layout>
            <main className="game">
                <Header score={score} />
                {!started ? <GameInitial onPick={gamePlayHandler} /> :
                    <GamePlay
                        userPick={userPick}
                        housePick={housePick}
                        result={result}
                        onRestart={restartHandler}
                    />}
                <Button small transparent right centerMobile text="Rules" clicked={modalHandler} />
            </main>
            <Rules active={modalActive} closed={modalHandler} />
        </Layout>
    )
}

export default Game;