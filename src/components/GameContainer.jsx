import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import IntroPage from './GameRoutes/IntroPage';
import PoliceCallPage from './GameRoutes/PoliceCallPage';
import PoliceReport from './GameRoutes/PoliceReport';
import EvidencePage from './GameRoutes/EvidencePage';
import SearchResultsContainer from './GameRoutes/SearchResults';
import PoliceFirstConversation from './PoliceFirstConversation';
/* import SearchBarMobile from './LeftBarComponents/SearchBarMobile'; */

function GameContainer() {

    const location = useLocation();
 
    return (
        <section className="game-container">
            <AnimatePresence exitBeforeEnter>
                <Routes location={location} key={location.key}>
                    <Route path="/" element={<IntroPage />} />
                    <Route path="police-first-conversation" element={<PoliceFirstConversation />} />
                    <Route path="call-police" element={<PoliceCallPage />} />
                    <Route path="police-report" element={<PoliceReport />} />
                    <Route path="evidence" element={<EvidencePage />} />
                </Routes>
            </AnimatePresence>
            <SearchResultsContainer />
            {/* <SearchBarMobile /> */}
        </section>
    )
}

export default GameContainer;