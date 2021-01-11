import React from 'react';

const Header = (props) => {
  return (
    <div className="header-container">
      <div className="header-div">
        <h1 className="page-title">Pokemon Memory Game</h1>
        <p className="current-score">Current Score: {props.currentScore}/20</p>
        <p className="high-score">High Score: {props.highScore}/20</p>
      </div>
      <div id="instructions" className="instructions">The Pokemon will change positions after every click. Don't choose the same Pokemon twice!</div>
    </div>
  )
}

export default Header;
