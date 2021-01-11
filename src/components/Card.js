import React from 'react';

const Card = (props) => {
  return (
    <div
      className="game-card"
      onClick={props.handleClick}>
      <img
        src={props.token}
        alt={props.token}
      />
    </div>
  )
}

export default Card;
