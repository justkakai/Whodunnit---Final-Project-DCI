import { useContext } from 'react';
import { IntroPageContext } from '../contexts/IntroPageContext';
import clown from '../images/scary-clown.png';

function GameContainer() {

    const { displayedText, displayNameInput, playerName, setPlayerName, displayInputAndButton, setDisplayInputAndButton } = useContext(IntroPageContext);

    return (
        <section className="game-container">
            <div className="clown-image-container">
                <img src={clown} alt="Clown" />
            </div>
            <div className="game-name-container">
                <p className='game-name'>Whodunnit?</p>
                <p className='game-descriptor'>{displayedText}</p>
                {displayNameInput ?
                    displayInputAndButton ?
                        <div>
                            <input type="text" onChange={(e) => setPlayerName(e.target.value)} value={playerName} />
                            <button onClick={() => setDisplayInputAndButton(false)}>Start!</button>
                        </div>
                        :
                        <p className='player-greeting'>Hello {playerName}!</p>
                    :
                    null}
            </div>
        </section>
    )
}

export default GameContainer;