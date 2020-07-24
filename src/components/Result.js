import React from "react";
import Zoom from "react-reveal/Zoom";
import Flash from "react-reveal/Flash";
import Button from "./Button";

const Result = props => (
    <Zoom duration={500}>
        <div className="result">
            <Flash duration={1000} count={1.5}>
                <h1 className="result__text">{props.text}</h1>
            </Flash>
            <Button big white text="Play again" clicked={props.restart} />
        </div>
    </Zoom>
)

export default Result;