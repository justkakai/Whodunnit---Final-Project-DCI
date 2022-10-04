import {  useContext } from 'react';
import { PoliceCallPageContext } from '../../contexts/PoliceCallPageContext';
import ProgressBar from './ProgressBar';

function TopBar() {
    const { showDnaResult, showClarkson } = useContext(PoliceCallPageContext);
    return (
        <section className='top-bar'>
            {showDnaResult ?
                <>
                    <ProgressBar text="View DNA Results" redirectUrl="/dna-report" />
                </>
                :
                null
            }
            {showClarkson ?
                <ProgressBar text="Clarkson hacking result" redirectUrl="/clarkson-result" />
                :
                null
            }
        </section>
    )
}

export default TopBar;