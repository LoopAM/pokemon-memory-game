import React, { useEffect } from 'react';

const Game = (props) => {

  const handleClick = (e) => {
    console.log(e.target.lastChild);
    console.log(props.tokens)
    const cardToken = e.target.src;
    props.setClickedTokens([...props.clickedTokens, cardToken]);
    console.log(props.clickedTokens)

    if (props.clickedTokens.includes(cardToken)) {
      props.setHighScore(props.currentScore);
      props.setCurrentScore(0);
      props.setClickedTokens([]);
    } else {
      props.setCurrentScore(props.currentScore + 1);
    }
  }

  useEffect( () => {
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

  }, [props.clickedTokens]);

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
