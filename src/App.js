import React, {useState, useEffect} from 'react';
import './styles/App.scss';
import '../src/styles/cssReset.scss';
import Cards from './components/Cards.js';

function App() {
  return (
    <div className="App">
      <Cards />
    </div>
  );
}

export default App;
