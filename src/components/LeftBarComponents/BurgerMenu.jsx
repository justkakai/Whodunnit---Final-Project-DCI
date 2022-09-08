import burgerMenuIcon from '../../images/burger-menu-icon.svg';

function BurgerMenu() {

    return (
        <button className="burger-menu-btn">
            <img src={burgerMenuIcon} alt="Burger Menu" />
        </button>
    )
}

export default BurgerMenu;