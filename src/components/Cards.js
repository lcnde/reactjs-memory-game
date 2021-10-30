import React from 'react';
import '../styles/cards.scss';

function Cards() {

  let images = [{url: 'images/969-Maserati-Ghibli-47.jpg', name: 'Maserati'}]
  return (
    <div className="cards-container">
      <h1>{images[0].url}</h1>
      <img src={images[0].url} />
    </div>
  )
}

export default Cards;
