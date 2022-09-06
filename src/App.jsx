import { IntroPageProvider } from './contexts/IntroPageContext';
import TopBar from './components/TopBar';
import IntroPage from './components/IntroPage';
import BottomBar from './components/BottomBar';

function App() {

  return (
    <IntroPageProvider>
      <div className="App">
        <TopBar />
        <IntroPage />
        <BottomBar />
      </div>
    </IntroPageProvider>
  );
}

export default App;
