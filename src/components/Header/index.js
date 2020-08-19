import React from "react";
import "./style.css";

function Header(props) {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Clicky Game</h1>
                <p className="lead">Click on a picture to gain points, but don't click on the same image twice!</p>
            </div>
            <div type="badge" className="btn btn-primary">
                High Score <span className="badge badge-light" id="high-score">{props.highScore}</span>
            </div>
            <div type="badge" className="btn btn-primary">
                Score <span className="badge badge-light" id="current-score">{props.currentScore}</span>
            </div>            
        </div>
    )
}

export default Header;