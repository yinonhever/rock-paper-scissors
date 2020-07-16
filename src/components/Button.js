import React from "react";

const Button = props => {
    let classes = ["button"];
    if (props.small) {
        classes = [...classes, "button--small"];
    }
    if (props.big) {
        classes = [...classes, "button--big"];
    }
    if (props.transparent) {
        classes = [...classes, "button--transparent"];
    }
    if (props.white) {
        classes = [...classes, "button--white"];
    }

    let containerClasses = ["button-container"];
    if (props.right) {
        containerClasses = [...containerClasses, "right"];
    }
    if (props.centerMobile) {
        containerClasses = [...containerClasses, "center-mobile"];
    }

    return (
        <div className={containerClasses.join(" ")}>
            <div className={classes.join(" ")} onClick={props.clicked}>
                {props.text}
            </div>
        </div>
    )
}

export default Button;