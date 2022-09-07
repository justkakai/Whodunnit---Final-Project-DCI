import { IntroPageProvider } from './contexts/IntroPageContext';
import LeftBar from './components/LeftBar';
import IntroPage from './components/IntroPage';
import RightBar from './components/RightBar';

function App() {

  return (
    <IntroPageProvider>
      <div className="App">
        <LeftBar />
        <IntroPage />
        <RightBar />
      </div>
    </IntroPageProvider>
  );
}

export default App;
