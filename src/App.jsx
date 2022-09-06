// import './App.css';
import clown from './images/scary-clown.png';

function App() {
  return (
    <div className="App">
      <div className="game-container">
        <div className="clown-image-container">
          <img src={clown} alt="Clown" />
        </div>
        <div className="game-name-container">
          <p className='game-name'>Whodunnit?</p>
          <p className='game-descriptor'>The ultimate murder mystery game!</p>
        </div>
      </div>
    </div>
  );
}

export default App;
