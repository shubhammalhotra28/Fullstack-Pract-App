import React from "react";

function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-'+props.color}>
            {props.children}
        </div>
    );
}

function WelcomeBlog() {
    return (
        <FancyBorder color="blue">
            <h1 className="Fialog-title">
                Welcome
            </h1>
            <p className="Dialog-message">
                Thankyou for visiting our spacecraft!
            </p>
        </FancyBorder>
    );
}
export default WelcomeBlog;