import policeReport from '../../images/policeReport.svg';

function PoliceReportBtn() {

    return (
        <button className="police-report-btn">
            <img src={policeReport} alt="View Police Report" />
        </button>
    )
}

export default PoliceReportBtn;