import '../styles/header.scss';

function Header(props) {


  return(
    <div className="header-container">
      <div className="title-container">
        <h1>Classic Cars Memory Game</h1>
        <h2>Click on each car without clicking the same twice</h2>
      </div>
      <div className="timer">TIMER: {props.timer}</div>
    </div>
  )
}

export default Header;
