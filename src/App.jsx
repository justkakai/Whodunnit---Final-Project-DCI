import { IntroPageProvider } from './contexts/IntroPageContext';
import { PoliceCallPageProvider } from './contexts/PoliceCallPageContext';
import { EvidencePageProvider } from './contexts/EvidenceContext';
import { SearchSectionProvider } from './contexts/SearchSectionContext';
import { BurgerMenuProvider } from './contexts/BurgerMenuContext';
import LeftBar from './components/LeftBar';
import RightBar from './components/RightBar';
import GameContainer from './components/GameContainer';

function App() {

  return (
    <IntroPageProvider>
      <PoliceCallPageProvider>
        <EvidencePageProvider>
          <SearchSectionProvider>
            <BurgerMenuProvider>
              <div className="App">
                <LeftBar />
                <GameContainer />
                <RightBar />
              </div>
            </BurgerMenuProvider>
          </SearchSectionProvider>
        </EvidencePageProvider>
      </PoliceCallPageProvider>
    </IntroPageProvider>
  );
}

export default App;
