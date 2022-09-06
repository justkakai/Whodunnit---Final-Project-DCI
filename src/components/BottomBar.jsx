import PoliceReportBtn from "./BottomBarComponents/PoliceReportBtn";
import EvidenceBtn from "./BottomBarComponents/EvidenceBtn";
import SearchBar from "./BottomBarComponents/SearchBar";

function BottomBar() {

    return (
        <section className="bottom-bar">
            <PoliceReportBtn />
            <EvidenceBtn />
            <SearchBar />
        </section>
    )
}

export default BottomBar;