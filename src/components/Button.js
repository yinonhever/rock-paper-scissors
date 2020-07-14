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

    return (
        <div style={{
            display: props.right ? "flex" : null,
            justifyContent: props.right ? "flex-end" : null
        }}>
            <div className={classes.join(" ")} onClick={props.clicked} style={{
                marginLeft: props.right ? "auto" : null
            }}>
                {props.text}
            </div>
        </div>
    )
}

export default Button;