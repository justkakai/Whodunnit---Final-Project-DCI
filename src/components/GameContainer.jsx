import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import IntroPage from './GameRoutes/IntroPage';
import LandingPage from './GameRoutes/LandingPage';
import PoliceCallPage from './GameRoutes/PoliceCallPage';
import PoliceReport from './GameRoutes/PoliceReport';
import DnaResults from './GameRoutes/DnaResults';
import EvidencePage from './GameRoutes/EvidencePage';
import ClarksonResult from './GameRoutes/ClarksonResult';
import SearchResultsContainer from './GameRoutes/SearchResults';
import TopBar from './GameRoutes/TopBar';
import JimmysReveal from './GameRoutes/JimmysReveal';
import PoliceFirstConversation from './PoliceFirstConversation';
/* import SearchBarMobile from './LeftBarComponents/SearchBarMobile'; */
import InterrogationBox from './GameRoutes/InterrogationBox';


function GameContainer() {

    const location = useLocation();
 
    return (
        <section className="game-container">
            <TopBar />
            <AnimatePresence exitBeforeEnter>
                <Routes location={location} key={location.key}>
                    <Route path="/" element={<IntroPage />} />
                    <Route path="police-first-conversation" element={<PoliceFirstConversation />} />
                    <Route path="landing-page" element={<LandingPage />} />
                    <Route path="call-police" element={<PoliceCallPage />} />
                    <Route path="police-report" element={<PoliceReport />} />
                    <Route path="dna-report" element={<DnaResults />} />
                    <Route path="evidence" element={<EvidencePage />} />
                    <Route path="clarkson-result" element={<ClarksonResult />} />
                    <Route path="jimmys-reveal" element={<JimmysReveal />} />
                    <Route path='interrogation' element={<InterrogationBox />} />
                </Routes>
            </AnimatePresence>
            <SearchResultsContainer />
        </section>
    )
}

export default GameContainer;