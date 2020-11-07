import React, { useState } from 'react';
import Header from './Header';
import Game from './Game';

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [tokens, setTokens] = useState([0,1,2,3,4,5,6,7,8,9,10,11]);
  const [clickedTokens, setClickedTokens] = useState([]);

  return (
    <div className="game-div">
      { console.log('App render')}
      <Header
        currentScore={currentScore}
        highScore={highScore}
      />
      Below Header
      <Game
        tokens={tokens}
        setTokens={setTokens}
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
        setHighScore={setHighScore}
        clickedTokens={clickedTokens}
        setClickedTokens={setClickedTokens}
      />
    </div>
  )
}

export default App;
