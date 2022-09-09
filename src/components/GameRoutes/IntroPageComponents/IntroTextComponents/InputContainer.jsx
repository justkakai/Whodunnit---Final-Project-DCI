import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { IntroPageContext } from '../../../../contexts/IntroPageContext';

function InputContainer() {

    let navigate = useNavigate();

    const { playerName, setPlayerName, setDisplayInputAndButton } = useContext(IntroPageContext);

    const handleClick = () => {
        setDisplayInputAndButton(false);
        setTimeout(() => {
            navigate("/call-police");
        }, 2000);
    };

    return (
        <div className='input-container'>
            <input type="text" onChange={(e) => setPlayerName(e.target.value)} value={playerName} placeholder="Enter your name" />
            <button onClick={handleClick}>Start!</button>
        </div>
    )
};

export default InputContainer;

