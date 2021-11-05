import React, {useState, useEffect} from 'react';
import '../styles/header.scss';

function Header() {
  return(
    <div className="header-container">
      <div className="title-container">
        <h1>Classic Cars Memory Game</h1>
        <h2>Click on each car without clicking the same twice</h2>
      </div>
      <div className="timer">TIMER: 5</div>
    </div>
  )
}

export default Header;
