import React, { useState, useEffect } from 'react';
import Header from './Header';
import Game from './Game';

const App = () => {
  const tokenSrcArr = [
    './assets/beedrill.png',
    './assets/blastoise.png',
    './assets/bulbasaur.png',
    './assets/butterfree.png',
    './assets/caterpie.png',
    './assets/charizard.png',
    './assets/charmander.png',
    './assets/charmeleon.png',
    './assets/ivysaur.png',
    './assets/kakuna.png',
    './assets/metapod.png',
    './assets/pickachu.png',
    './assets/pidgey.png',
    './assets/pidgeotto.png',
    './assets/pidgeot.png',
    './assets/raichu.png',
    './assets/squirtle.png',
    './assets/venusaur.png',
    './assets/wartortle.png',
    './assets/weedle.png',
  ];

  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [tokens, setTokens] = useState([...tokenSrcArr]);
  const [clickedTokens, setClickedTokens] = useState([]);

  function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  }

  useEffect( () => {
    setTokens(getRandom(tokenSrcArr, 12));
  }, [clickedTokens]);

  return (
    <div className="app-div">
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
          highScore={highScore}
          setHighScore={setHighScore}
          clickedTokens={clickedTokens}
          setClickedTokens={setClickedTokens}
        />
      </div>
    </div>
  )
}

export default App;
