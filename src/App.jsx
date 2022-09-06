// import './App.css';
import clown from './images/scary-clown.png';

function App() {
  return (
    <div className="App">
      <div className="top-bar">
        <button>Jimmy's Email Account</button>
        <button>Recorded Conversations</button>
        <button>Addresses already visited</button>
        <button>CALL POLICE</button>
      </div>

      <div className="game-container">
        <div className="clown-image-container">
          <img src={clown} alt="Clown" />
        </div>
        <div className="game-name-container">
          <p className='game-name'>Whodunnit?</p>
          <p className='game-descriptor'>The ultimate murder mystery game!</p>
        </div>
      </div>

      <div className="bottom-bar">
        <button>VIEW POLICE REPORT</button>
        <button>VIEW EVIDENCE</button>
        <button>Search for Anything</button>
      </div>
    </div>
  );
}

export default App;
