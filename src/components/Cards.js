import React from 'react';
import '../styles/cards.scss';

function Cards() {

  let images = [
    {url: 'images/969-Maserati-Ghibli-47.jpg', name: 'Maserati', clicked: false},
    {url: 'images/1961-Jaguar-E-Type.jpg', name: 'Jaguar', clicked: false},
    {url: 'images/1962-Ferrari-250.jpg', name: 'Ferrari-250', clicked: false},
    {url: 'images/1963-Aston-Martin-DB5.jpg', name: 'Aston-Martin', clicked: false},
    {url: 'images/1963-Corvette-Sting-Ray.jpg', name: 'Corvette', clicked: false},
    {url: 'images/1966-Alfa-Romeo-Spider-Duetto.jpg', name: 'Alfa-Romeo', clicked: false},
    {url: 'images/1966-Lamborghini-Miura.jpg', name: 'Lamborghini', clicked: false},
    {url: 'images/1966-Shelby-Cobra-427.jpg', name: 'Shelby', clicked: false},
    {url: 'images/1969-Boss-429-Mustang.jpg', name: 'Boss', clicked: false},
    {url: 'images/1969-Chevrolet-Camaro.jpg', name: 'Chevrolet', clicked: false},
    {url: 'images/1969-Dodge-Charger-2.jpg', name: 'Dodge', clicked: false},
    {url: 'images/1969-Ferrari-Dino-246-GT.jpg', name: 'Ferrari-Dino', clicked: false},
    {url: 'images/1970-Datsun-240Z.jpg', name: 'Datsun', clicked: false},
    {url: 'images/Mercedes-300SL-Gullwing.jpg', name: 'Mercedes', clicked: false},
    {url: 'images/Toyota-2000GT.jpg', name: 'Toyota', clicked: false}
  ]

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

  return (
    <div className="cards-container">
      <img src={images[0].url} alt="car" />
    </div>
  )
}

export default Cards;
