import { useContext } from 'react';
import { IntroPageContext } from '../../contexts/IntroPageContext';
import InputContainer from './IntroTextComponents/InputContainer';
import PlayerGreeting from './IntroTextComponents/PlayerGreeting';

function IntroTextContainer() {

    const { displayedText, displayNameInput, displayInputAndButton } = useContext(IntroPageContext);

    return (
        <div className="intro-text-container">
            <p className='game-name'>Whodunnit?</p>
            <div className='game-descriptor'>{displayedText}</div>
            {displayNameInput ?
                displayInputAndButton ?
                    <InputContainer />
                    :
                    <PlayerGreeting />
                :
                null}
        </div>
    )
}

export default IntroTextContainer;