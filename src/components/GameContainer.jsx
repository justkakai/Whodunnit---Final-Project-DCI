import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import IntroPage from './GameContainerComponents/IntroPage';
import PolicePage from './GameContainerComponents/PolicePage';

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