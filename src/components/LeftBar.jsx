import BurgerMenu from './LeftBarComponents/BurgerMenu';
import ConversationsBtn from './LeftBarComponents/ConversationsBtn';
import SearchBarMobile from './LeftBarComponents/SearchBarMobile';
import VisitedAddressesBtn from './LeftBarComponents/VisitedAddressesBtn';

function LeftBar() {

    return (
        <section className="left-bar">
            <ConversationsBtn />
            <VisitedAddressesBtn />
            <SearchBarMobile />
            <BurgerMenu />
        </section>
    )
}

export default LeftBar;