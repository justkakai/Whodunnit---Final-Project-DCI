import { useContext } from "react";
import { EvidencePageContext } from "../../../contexts/EvidenceContext";
import { BsArrowUpRight } from 'react-icons/bs';
import neesonInvoice from '../../../images/neesonInvoice.jpg';

function InvoiceContainer() {

    const { setDisplayEvidencePopup, setActiveImage } = useContext(EvidencePageContext);

    return (
        <div>
            <img src={neesonInvoice} alt="Harry Neeson Invoice" />
            <p>
                <button onClick={() => {
                    setDisplayEvidencePopup(true);
                    setActiveImage(neesonInvoice);
                }
                }>
                    <span>Expand</span>
                    <BsArrowUpRight style={{ fontSize: "1.45em", color: "white" }} />
                </button>
            </p>
        </div>
    )
}

export default InvoiceContainer;