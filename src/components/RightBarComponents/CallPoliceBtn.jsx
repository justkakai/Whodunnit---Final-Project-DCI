import { useNavigate } from 'react-router-dom';
import callPolice from '../../images/callPolice.svg';

function CallPoliceBtn() {

    let navigate = useNavigate();

    return (
        <button className="call-police-btn" onClick={() => { navigate("/call-police") }}>
            <img src={callPolice} alt="Call the Police" />
        </button>
    )
}

export default CallPoliceBtn;