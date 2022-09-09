import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import IntroPage from './GameRoutes/IntroPage';
import PolicePage from './GameRoutes/PolicePage';
import PoliceReport from './GameRoutes/PoliceReport';

function GameContainer() {

    const location = useLocation();

    return (
        <section className="game-container">
            <AnimatePresence exitBeforeEnter>
                <Routes location={location} key={location.key}>
                    <Route path="/" element={<IntroPage />} />
                    <Route path="call-police" element={<PolicePage />} />
                    <Route path="police-report" element={<PoliceReport />} />
                </Routes>
            </AnimatePresence>
        </section>
    )
}

export default GameContainer;