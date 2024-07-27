import './Header.scss';
import logo from '../../images/logo.svg'

function Header() {
    return (
        <header className="header">
            <div>
                <img src={logo} className='header__logo' />
                <nav className='header__nav'>
                    <ul className='header__nav-items'>
                        <li><a className='header__nav-item' href='#'>Кейсы</a></li>
                        <li><a className='header__nav-item' href='#'>О нас</a></li>
                        <li><a className='header__nav-item' href='#'>Обратная связь</a></li>
                    </ul>
                </nav>
            </div>
            <button className='header__button'>Войти</button>
        </header>
    );
}

export default Header;
