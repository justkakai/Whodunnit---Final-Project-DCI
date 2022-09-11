import { IntroPageProvider } from './contexts/IntroPageContext';
import { PolicePageProvider } from './contexts/PolicePageContext';
import { EvidencePageProvider } from './contexts/EvidenceContext';
import LeftBar from './components/LeftBar';
import RightBar from './components/RightBar';
import GameContainer from './components/GameContainer';

function App() {

  return (
    <IntroPageProvider>
      <PolicePageProvider>
        <EvidencePageProvider>
          <div className="App">
            <LeftBar />
            <GameContainer />
            <RightBar />
          </div>
        </EvidencePageProvider>
      </PolicePageProvider>
    </IntroPageProvider>
  );
}

export default App;
