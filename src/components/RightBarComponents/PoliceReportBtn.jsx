import { useNavigate, useLocation } from 'react-router-dom';
import policeReport from '../../images/policeReport.svg';

function PoliceReportBtn() {

    const navigate = useNavigate();
    const location = useLocation();

    return (
        <button className={location.pathname === "/police-report" ? "police-report-btn-active" : "police-report-btn"} onClick={() => { navigate("/police-report") }}>
            <img src={policeReport} alt="View Police Report" />
        </button>
    )
}

export default PoliceReportBtn;