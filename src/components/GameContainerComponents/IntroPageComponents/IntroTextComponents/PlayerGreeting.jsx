import { useContext } from 'react';
import { IntroPageContext } from '../../../../contexts/IntroPageContext';

function PlayerGreeting() {

    const { playerName } = useContext(IntroPageContext);

    return (
        <p className='player-greeting'>Hello Detective {playerName === "" ? "Stranger" : playerName}!</p>
    )
}

export default PlayerGreeting;