import callPolice from '../../images/callPolice.svg';

function CallPoliceBtn() {

    return (
        <button className="call-police-btn">
            <img src={callPolice} alt="Call the Police" />
        </button>
    )
}

export default CallPoliceBtn;