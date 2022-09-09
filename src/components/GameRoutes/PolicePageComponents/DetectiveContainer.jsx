import { useContext } from 'react';
import { PolicePageContext } from '../../../contexts/PolicePageContext';
import detective from '../../../images/detective.svg';

function DetectiveContainer() {

    const { detectiveWords, setDetectiveWords, handleKeyPress } = useContext(PolicePageContext);

    return (
        <div className="detective-container">
            <div className="detective-dialog-container">
                <div className='dialog-box-detective'>
                    <input type="text" onChange={(e) => setDetectiveWords(e.target.value)} onKeyDown={handleKeyPress} value={detectiveWords} />
                </div>
            </div>
            <div className="detective-image-container">
                <img src={detective} alt="Police woman" />
            </div>
        </div>
    )
}

export default DetectiveContainer;