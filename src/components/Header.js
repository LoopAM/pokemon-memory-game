import React from 'react';

const Header = (props) => {
  return (
    <div className="header-container">
      <div className="header-div">
        { console.log('Header Render') }
        <h1 className="page-title">Pokemon Memory Game</h1>
        <p className="current-score">Current Score: {props.currentScore}</p>
        <p className="high-score">High Score: {props.highScore}</p>
      </div>
      <div className="instructions">Don't choose the same Pokemon twice!</div>
    </div>
  )
}

export default Header;
