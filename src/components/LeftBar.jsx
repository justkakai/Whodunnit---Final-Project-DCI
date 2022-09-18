import { useLocation } from 'react-router-dom';
import BurgerMenu from './LeftBarComponents/BurgerMenu';
import ConversationsBtn from './LeftBarComponents/ConversationsBtn';
import SearchBarMobile from './LeftBarComponents/SearchBarMobile';
import VisitedAddressesBtn from './LeftBarComponents/VisitedAddressesBtn';

function LeftBar() {

    const location = useLocation();

    return (
        <section className="left-bar">
            {(location.pathname !== "/") ? <ConversationsBtn /> : null}
            {(location.pathname !== "/") ? <VisitedAddressesBtn /> : null}
            {(location.pathname !== "/") ? <SearchBarMobile /> : null}
            {(location.pathname !== "/") ? <BurgerMenu /> : null}
        </section>
    )
}

export default LeftBar;