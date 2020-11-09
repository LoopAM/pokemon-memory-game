import React, { useEffect } from 'react';

const Game = (props) => {

  const handleClick = (e) => {
    const cardToken = e.target.src;
    props.setClickedTokens([...props.clickedTokens, cardToken]);

    if (props.clickedTokens.includes(cardToken)) {
      if (props.currentScore > props.highScore) {
        props.setHighScore(props.currentScore);
      }
      props.setCurrentScore(0);
      props.setClickedTokens([]);
    } else {
      props.setCurrentScore(props.currentScore + 1);
    }
  }

  // Commented out for future difficulty feature to be added
  // Randomization is handled in App.js
  /* useEffect( () => {
    console.log('Game update');
    const shuffleTokens = (tokens) => {
      const arr = tokens.slice();
      for (let i = arr.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [ arr[i], arr[j] ] = [ arr[j], arr[i] ];
      }
      return arr;
    }

    const shuffled = shuffleTokens(props.tokens);
    props.setTokens(shuffled);

  }, [props.clickedTokens]); */

  return (
    <div className="game-div">
      { console.log('Game render') }
      {
        props.tokens.map( (token, index) => {
          return (
            <div
              key={index}
              className="game-card">
              <img
                src={token}
                onClick={handleClick} />
            </div>
          );
        })
      }
    </div>
  )
}

export default Game;
