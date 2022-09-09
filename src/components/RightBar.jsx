import { useContext } from 'react';
import PoliceReportBtn from "./RightBarComponents/PoliceReportBtn";
import EvidenceBtn from "./RightBarComponents/EvidenceBtn";
import SearchBar from "./RightBarComponents/SearchBar";
import CallPoliceBtn from "./RightBarComponents/CallPoliceBtn";
import { IntroPageContext } from '../contexts/IntroPageContext';

function RightBar() {

    const { showCallPoliceBtn } = useContext(IntroPageContext);

    return (
        <section className="right-bar">
            {showCallPoliceBtn ? <CallPoliceBtn /> : null}
            <PoliceReportBtn />
            <EvidenceBtn />
            <SearchBar />
        </section>
    )
}

export default RightBar;