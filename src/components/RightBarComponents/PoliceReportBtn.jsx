import { useNavigate } from 'react-router-dom';
import policeReport from '../../images/policeReport.svg';

function PoliceReportBtn() {

    let navigate = useNavigate();

    return (
        <button className="police-report-btn" onClick={() => { navigate("/police-report") }}>
            <img src={policeReport} alt="View Police Report" />
        </button>
    )
}

export default PoliceReportBtn;