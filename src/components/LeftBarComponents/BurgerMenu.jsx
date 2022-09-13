import { useContext } from 'react';
import { BurgerMenuContext } from '../../contexts/BurgerMenuContext';
import burgerMenuIcon from '../../images/burger-menu-icon.svg';

function BurgerMenu() {

    const { displayBurgerDropdown, setDisplayBurgerDropdown, burgerItemDetails, handleClick } = useContext(BurgerMenuContext);

    return (
        <section className='burger-menu-container'>
            <button className="burger-menu-btn" onClick={() => setDisplayBurgerDropdown(!displayBurgerDropdown)}>
                <img src={burgerMenuIcon} alt="Burger Menu" />
            </button>
            <ul
                className="burger-menu-dropdown"
                style={displayBurgerDropdown ? { height: "51vh" } : { height: "0" }}>
                {burgerItemDetails.map((item, index) => (
                    <li key={index}>
                        <button className={item.class} onClick={() => { handleClick(item.route) }}>{item.text}</button>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default BurgerMenu;