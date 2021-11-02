import React, {useState, useEffect} from 'react';
import '../styles/cards.scss';
import uniqid from "uniqid";

function Cards() {
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
  const [updater, setUpdater] = useState(1)

  function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }

  function shuffleState() {
    let newState = cars
    shuffle(newState)
    setCars(newState)
    console.log(cars)
    setUpdater(updater+1)
  }

  function testState() {
    console.log(cars)
  }
  function changeState() {
    setCars('idontknow')
  }

  return (
    <div className="cards-container">
      <div className="cards">
        {
          cars.map((img) =>
          <div className="single-card-container" onClick={() => shuffleState()}>
              <img key={img.id} src={img.url} alt="Classic car" className="single-card" />
              <h2>{img.name}</h2>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Cards;
