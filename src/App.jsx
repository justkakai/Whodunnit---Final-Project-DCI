import { IntroPageProvider } from './contexts/IntroPageContext';
import TopBar from './components/TopBar';
import GameContainer from './components/GameContainer';
import BottomBar from './components/BottomBar';

function App() {

  return (
    <IntroPageProvider>
      <div className="App">
        <TopBar />
        <GameContainer />
        <BottomBar />
      </div>
    </IntroPageProvider>
  );
}

export default App;
