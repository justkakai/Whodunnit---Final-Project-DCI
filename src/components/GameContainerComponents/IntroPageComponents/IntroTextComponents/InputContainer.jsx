import { useContext } from 'react';
import { IntroPageContext } from '../../../../contexts/IntroPageContext';

function InputContainer() {

    const { playerName, setPlayerName, setDisplayInputAndButton } = useContext(IntroPageContext);

    return (
        <div className='input-container'>
            <input type="text" onChange={(e) => setPlayerName(e.target.value)} value={playerName} placeholder="Enter your name" />
            <button onClick={() => setDisplayInputAndButton(false)}>Start!</button>
        </div>
    )
};

export default InputContainer;

