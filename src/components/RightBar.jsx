import PoliceReportBtn from "./RightBarComponents/PoliceReportBtn";
import EvidenceBtn from "./RightBarComponents/EvidenceBtn";
import SearchBar from "./RightBarComponents/SearchBar";
import CallPoliceBtn from "./RightBarComponents/CallPoliceBtn";

function RightBar() {

    return (
        <section className="right-bar">
            <CallPoliceBtn />
            <PoliceReportBtn />
            <EvidenceBtn />
            <SearchBar />
        </section>
    )
}

export default RightBar;