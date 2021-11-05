import React, {useState, useEffect} from 'react';
import './styles/App.scss';
import './styles/cssReset.scss';
import Cards from './components/Cards.js';
import Header from './components/Header.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Cards />
    </div>
  );
}

export default App;
