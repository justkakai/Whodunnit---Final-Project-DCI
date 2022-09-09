/* import { Routes, Route, Navigate, useLocation } from 'react-router-dom'; */
import { IntroPageProvider } from './contexts/IntroPageContext';
import LeftBar from './components/LeftBar';
import RightBar from './components/RightBar';
import GameContainer from './components/GameContainer';

function App() {

  return (
    <IntroPageProvider>
      <div className="App">
        <LeftBar />
        <GameContainer />
        <RightBar />
      </div>
    </IntroPageProvider>
  );
}

export default App;
