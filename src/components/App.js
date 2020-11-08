import React, { useState } from 'react';
import Header from './Header';
import Game from './Game';

const App = () => {
  const tokenSrcArr = [
    './assets/blastoise.png',
    './assets/bulbasaur.png',
    './assets/butterfree.png',
    './assets/caterpie.png',
    './assets/charizard.png',
    './assets/charmander.png',
    './assets/charmeleon.png',
    './assets/ivysaur.png',
    './assets/metapod.png',
    './assets/squirtle.png',
    './assets/venusaur.png',
    './assets/wartortle.png',
  ];

  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [tokens, setTokens] = useState([...tokenSrcArr]);
  const [clickedTokens, setClickedTokens] = useState([]);

  return (
    <div className="app-div">
      { console.log('App render')}
      <Header
        currentScore={currentScore}
        highScore={highScore}
      />
      <div className="game-container">
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
    </div>
  )
}

export default App;
