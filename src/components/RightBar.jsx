import { useLocation } from 'react-router-dom';
import PoliceReportBtn from "./RightBarComponents/PoliceReportBtn";
import EvidenceBtn from "./RightBarComponents/EvidenceBtn";
import SearchBar from "./RightBarComponents/SearchBar";
import CallPoliceBtn from "./RightBarComponents/CallPoliceBtn";

function RightBar() {

    const location = useLocation();

    return (
        <section className="right-bar">
            {(location.pathname !== "/") ? <CallPoliceBtn /> : null}
            {(location.pathname !== "/") ? <PoliceReportBtn /> : null}
            {(location.pathname !== "/") ? <EvidenceBtn /> : null}
            {(location.pathname !== "/") ? <SearchBar /> : null}
        </section>
    )
}

export default RightBar;