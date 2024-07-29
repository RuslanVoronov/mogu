import './Header.scss';
import { useState } from 'react';
import MenuPopup from '../MenuPopup/MenuPopup'
import logo from '../../images/logo.svg'

function Header() {
    const [isMenuPopupOpened, setIsMenuPopupOpened] = useState(false);

    function openPopup() {
        setIsMenuPopupOpened(!isMenuPopupOpened);
    }

    function closePopup() {
        setIsMenuPopupOpened(!isMenuPopupOpened);
    }

    return (
        <>
            <header className="header">
                <img src={logo} className='header__logo' />
                <div className='header__container'>
                    <nav className='header__nav'>
                        <ul className='header__nav-items'>
                            <li><a className='header__nav-item' href='#cases'>Кейсы</a></li>
                            <li><a className='header__nav-item' href='#about-us'>О нас</a></li>
                            <li><a className='header__nav-item' href='#feedback'>Обратная связь</a></li>
                        </ul>
                    </nav>
                    <button type='button' className='header__button'>Войти</button>
                </div>
                <button type='button' className='header__menu' onClick={openPopup}></button>

            </header>
            <MenuPopup isPopupOpened={isMenuPopupOpened} closePopup={closePopup}/>
        </>
    );
}

export default Header;
