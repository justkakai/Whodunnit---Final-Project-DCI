import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import IntroPage from './GameRoutes/IntroPage';
import PoliceCallPage from './GameRoutes/PoliceCallPage';
import PoliceReport from './GameRoutes/PoliceReport';
import EvidencePage from './GameRoutes/EvidencePage';
import SearchResultsContainer from './GameRoutes/SearchResults';
import TopBar from './GameRoutes/TopBar';

function GameContainer() {

    const location = useLocation();

    return (
        <section className="game-container">
            <TopBar />
            <AnimatePresence exitBeforeEnter>
                <Routes location={location} key={location.key}>
                    <Route path="/" element={<IntroPage />} />
                    <Route path="call-police" element={<PoliceCallPage />} />
                    <Route path="police-report" element={<PoliceReport />} />
                    <Route path="evidence" element={<EvidencePage />} />
                </Routes>
            </AnimatePresence>
            <SearchResultsContainer />
        </section>
    )
}

export default GameContainer;