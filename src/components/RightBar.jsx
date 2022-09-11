import { useLocation } from 'react-router-dom';
import PoliceReportBtn from "./RightBarComponents/PoliceReportBtn";
import EvidenceBtn from "./RightBarComponents/EvidenceBtn";
import SearchBar from "./RightBarComponents/SearchBar";
import CallPoliceBtn from "./RightBarComponents/CallPoliceBtn";

function RightBar() {

    const location = useLocation();

    return (
        <section className="right-bar">
            {(location.pathname !== "/") && (location.pathname !== "/call-police") ? <CallPoliceBtn /> : null}
            <PoliceReportBtn />
            <EvidenceBtn />
            <SearchBar />
        </section>
    )
}

export default RightBar;