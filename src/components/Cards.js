import React, {useState, useEffect} from 'react';
import '../styles/cards.scss';

function Cards(props) {
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
  function winLoseHandle(img) {
    if (img.clicked === false) {
      img.clicked = true
    } else {
      alert("You already clicked this image")
    }
  }
  function shuffleState() {
    let newState = props.cars
    shuffle(newState)
    props.setCars(newState)
    console.log(props.cars)
    setUpdater(updater+1)
  }

  function imageClickHandler(img) {
    winLoseHandle(img)
    shuffleState()
    props.handleTimer()
    console.log(props.timer)
  }

  return (
    <div className="cards-container">
      <div className="cards">
        {
          props.cars.map((img) =>
          <div className="single-card-container" onClick={() => imageClickHandler(img)}>
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
