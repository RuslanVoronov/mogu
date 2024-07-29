import './MenuPopup.scss'

function MenuPopup({ isPopupOpened, closePopup }) {

    return (
        <nav className={`${isPopupOpened ? 'menu-popup menu-popup_opened' : 'menu-popup'}`}>
            <div className='menu-popup__content'>
                <button className='menu-popup__close-button' onClick={closePopup}></button>
                <ul className="menu-popup__list">
                    <li className="menu-popup__item">
                        <a href='#about-us' onClick={closePopup} className="menu-popup__link">О нас</a>
                    </li>
                    <li className="menu-popup__item">
                        <a href='#cases' onClick={closePopup} className="menu-popup__link">Кейсы</a>
                    </li>
                    <li className="menu-popup__item">
                        <a href='#feedback' onClick={closePopup} className="menu-popup__link">Обратная связь</a>
                    </li>
                </ul>
                <button type='button' className='header__button'>Войти</button>
            </div>
        </nav>
    );
};

export default MenuPopup;