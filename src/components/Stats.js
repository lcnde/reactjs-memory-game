import React, {useState, useEffect} from 'react';
import '../styles/stats.scss';

function Stats(props) {
  return(
    <div className="stats-container">
      <h2>Wins: {props.win} | Losses: {props.lose}</h2>
      <h2>Score: {props.score - 1} | Remaining: {props.remaining} | High Score: {props.highScore}</h2>
    </div>
  )
}

export default Stats;
