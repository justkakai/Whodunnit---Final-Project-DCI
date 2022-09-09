import { IntroPageProvider } from './contexts/IntroPageContext';
import { PolicePageProvider } from './contexts/PolicePageContext';
import LeftBar from './components/LeftBar';
import RightBar from './components/RightBar';
import GameContainer from './components/GameContainer';

function App() {

  return (
    <IntroPageProvider>
      <PolicePageProvider>
        <div className="App">
          <LeftBar />
          <GameContainer />
          <RightBar />
        </div>
      </PolicePageProvider>
    </IntroPageProvider>
  );
}

export default App;
