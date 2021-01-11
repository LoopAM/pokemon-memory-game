import React, { useEffect } from 'react';
import Card from './Card';

const Game = (props) => {

  const handleClick = (e) => {
    const clickedToken = e.target.children[0].src;

    if (props.clickedTokens.includes(clickedToken)) {
      props.setCurrentScore(0);
      props.setClickedTokens([]);
    } else {
      if (props.highScore <= props.currentScore) {
        props.setHighScore(props.highScore + 1);
      }
      props.setCurrentScore(props.currentScore + 1);

      props.setClickedTokens([...props.clickedTokens, clickedToken]);
    }

    if (props.highScore === 20) {
      const text = document.getElementById('instructions');
      text.textContent = 'You got them all! Good job!'
    }
  }

  return (
    <div className="game-div">
      {
        props.tokens.map( token => {
          return (
            <Card
              key={token}
              token={token}
              handleClick={handleClick}
            />
          );
        })
      }
    </div>
  )
}

export default Game;
