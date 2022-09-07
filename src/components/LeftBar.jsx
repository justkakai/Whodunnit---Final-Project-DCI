/* import JimmyEmailBtn from './TopBarComponents/JimmyEmailBtn'; */
/* import CallPoliceBtn from './LeftBarComponents/CallPoliceBtn'; */
import BurgerMenu from './LeftBarComponents/BurgerMenu';
import ConversationsBtn from './LeftBarComponents/ConversationsBtn';
import VisitedAddressesBtn from './LeftBarComponents/VisitedAddressesBtn';

function LeftBar() {

    return (
        <section className="left-bar">
            {/* <JimmyEmailBtn /> */}
            {/* <CallPoliceBtn /> */}
            <ConversationsBtn />
            <VisitedAddressesBtn />
            <BurgerMenu />
        </section>
    )
}

export default LeftBar;