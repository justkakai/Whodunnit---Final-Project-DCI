import { Routes, Route, useLocation } from 'react-router-dom';
import IntroPage from './GameRoutes/IntroPage';
import PolicePage from './GameRoutes/PolicePage';

function GameContainer() {

    const location = useLocation();

    return (
        <section className="game-container">
            <Routes location={location} key={location.key}>
                <Route path="/" element={<IntroPage />} />
                <Route path="call-police" element={<PolicePage />} />
            </Routes>
        </section>
    )
}

export default GameContainer;