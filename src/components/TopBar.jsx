import JimmyEmailBtn from './TopBarComponents/JimmyEmailBtn';
import ConversationsBtn from './TopBarComponents/ConversationsBtn';
import VisitedAddressesBtn from './TopBarComponents/VisitedAddressesBtn';
import CallPoliceBtn from './TopBarComponents/CallPoliceBtn';

function TopBar() {

    return (
        <section className="top-bar">
            <JimmyEmailBtn />
            <ConversationsBtn />
            <VisitedAddressesBtn />
            <CallPoliceBtn />
        </section>
    )
}

export default TopBar;