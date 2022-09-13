import { IntroPageProvider } from './contexts/IntroPageContext';
import { PoliceCallPageProvider } from './contexts/PoliceCallPageContext';
import { EvidencePageProvider } from './contexts/EvidenceContext';
import LeftBar from './components/LeftBar';
import RightBar from './components/RightBar';
import GameContainer from './components/GameContainer';

function App() {

  return (
    <IntroPageProvider>
      <PoliceCallPageProvider>
        <EvidencePageProvider>
          <div className="App">
            <LeftBar />
            <GameContainer />
            <RightBar />
          </div>
        </EvidencePageProvider>
      </PoliceCallPageProvider>
    </IntroPageProvider>
  );
}

export default App;
