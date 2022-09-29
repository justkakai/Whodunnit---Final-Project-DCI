import { useLocation } from "react-router-dom";
import PoliceReportBtn from "./RightBarComponents/PoliceReportBtn";
import EvidenceBtn from "./RightBarComponents/EvidenceBtn";
import SearchBar from "./RightBarComponents/SearchBar";
import CallPoliceBtn from "./RightBarComponents/CallPoliceBtn";
import { useContext } from "react";
import {IntroPageContext} from "../contexts/IntroPageContext";


function RightBar() {
  const location = useLocation();
  const  showRightBar  = useContext(IntroPageContext);


  return (
    <section className="right-bar">
      {(location.pathname !== "/" && location.pathname !== "/call-police") ? 
        <CallPoliceBtn /> : null}
      {/* {(location.pathname !== "/") ? <CallPoliceBtn /> : null} */}
      {/* {location.pathname !== "/" ? <PoliceReportBtn /> : null}
      {location.pathname !== "/" ? <EvidenceBtn /> : null}
      {location.pathname !== "/" ? <SearchBar /> : null} */}
      {showRightBar ? <PoliceReportBtn /> : null }
            <EvidenceBtn />
            <SearchBar /> 
    </section>
  );
}

export default RightBar;
