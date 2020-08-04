import React from "react";
import logo from "../images/logo-bonus.svg";

const Header = props => (
    <header className="header">
        <img src={logo} alt="logo" className="logo" />
        <div className="score-box">
            <div className="score-box__content">
                <span className="score-box__title">Score</span>
                <span className="score-box__number">{props.score}</span>
            </div>
        </div>
    </header>
)

export default Header;