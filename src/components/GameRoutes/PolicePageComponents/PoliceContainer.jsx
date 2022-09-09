import { useContext } from 'react';
import { PolicePageContext } from '../../../contexts/PolicePageContext';
import policeWoman from '../../../images/policeWoman.svg';

function PoliceContainer() {

    const { policeWords } = useContext(PolicePageContext);

    return (
        <div className="police-container">
                <div className="police-image-container">
                    <img src={policeWoman} alt="Police woman" />
                </div>
                <div className="police-dialog-container">
                    <div className='dialog-box-police'>
                        <p>{policeWords}</p>
                    </div>
                </div>
            </div>
    )
}

export default PoliceContainer;