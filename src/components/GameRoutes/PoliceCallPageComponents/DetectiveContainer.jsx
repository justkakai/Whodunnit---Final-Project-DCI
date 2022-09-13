import { useContext } from 'react';
import { PoliceCallPageContext } from '../../../contexts/PoliceCallPageContext';
import detective from '../../../images/detective.svg';

function DetectiveContainer() {

    const { detectiveWords, setDetectiveWords, handleKeyPress } = useContext(PoliceCallPageContext);

    return (
        <div className="detective-container">
            <div className="detective-dialog-container">
                <div className='dialog-box-detective'>
                    <input type="text" spellcheck="false" onChange={(e) => setDetectiveWords(e.target.value)} onKeyDown={handleKeyPress} value={detectiveWords} />
                </div>
            </div>
            <div className="detective-image-container">
                <img src={detective} alt="Detective" />
            </div>
        </div>
    )
}

export default DetectiveContainer;