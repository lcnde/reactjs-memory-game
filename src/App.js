import React, {useState, useEffect} from 'react';
import uniqid from "uniqid";
import './styles/App.scss';
import './styles/cssReset.scss';
import Cards from './components/Cards.js';
import Header from './components/Header.js';

function App() {
  const [cars, setCars] = useState([
    {url: 'images/969-Maserati-Ghibli-47.jpg', name: 'Maserati', clicked: false, id: uniqid()},
    {url: 'images/1961-Jaguar-E-Type.jpg', name: 'Jaguar', clicked: false, id: uniqid()},
    {url: 'images/1962-Ferrari-250.jpg', name: 'Ferrari 250', clicked: false, id: uniqid()},
    {url: 'images/1963-Aston-Martin-DB5.jpg', name: 'Aston Martin', clicked: false, id: uniqid()},
    {url: 'images/1963-Corvette-Sting-Ray.jpg', name: 'Corvette', clicked: false, id: uniqid()},
    {url: 'images/1966-Alfa-Romeo-Spider-Duetto.jpg', name: 'Alfa-Romeo', clicked: false, id: uniqid()},
    {url: 'images/1966-Lamborghini-Miura.jpg', name: 'Lamborghini', clicked: false, id: uniqid()},
    {url: 'images/1966-Shelby-Cobra-427.jpg', name: 'Shelby', clicked: false, id: uniqid()},
    {url: 'images/1969-Boss-429-Mustang.jpg', name: 'Boss', clicked: false, id: uniqid()},
    {url: 'images/1969-Chevrolet-Camaro.jpg', name: 'Chevrolet', clicked: false, id: uniqid()},
    {url: 'images/1969-Dodge-Charger-2.jpg', name: 'Dodge', clicked: false, id: uniqid()},
    {url: 'images/1969-Ferrari-Dino-246-GT.jpg', name: 'Ferrari Dino', clicked: false, id: uniqid()},
    {url: 'images/1970-Datsun-240Z.jpg', name: 'Datsun', clicked: false, id: uniqid()},
    {url: 'images/Mercedes-300SL-Gullwing.jpg', name: 'Mercedes', clicked: false, id: uniqid()},
    {url: 'images/Toyota-2000GT.jpg', name: 'Toyota', clicked: false, id: uniqid()}
  ])
  const [timer, setTimer] = useState(5)

  let originalTimer = timer

  function resetGame() {
    setTimer(originalTimer)
    for (var i=0; i < cars.length; i++) {
      cars[i].clicked = false
    }
  }

  const handleTimer = () => {
    let helper = timer
    var timerInterval = setInterval(() => {
      helper -= 1
      setTimer(helper)
      console.log(timer)
      if (helper === 0) {
        alert('You have lost')
        resetGame()
        clearInterval(timerInterval)
      }
    }, 1000)
  }

  return (
    <div className="App">
      <Header 
        timer={timer}
        setTimer={setTimer}
      />
      <Cards 
        cars={cars} 
        setCars={setCars}
        handleTimer={handleTimer}
      />
    </div>
  );
}

export default App;
