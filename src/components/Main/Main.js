import './Main.scss';
import Header from '../Header/Header';
import pen from '../../images/pen.svg';
import avatar from '../../images/avatar1.svg';

function Main() {
    return (
        <>
            <Header />
            <section className="main">

                <div className='main__container'>
                    <h1 className='main__title'>Таск-трекер
                        для креативных команд</h1>
                    <p className='main__text'>Создавайте доски, приглашайте коллег и партнеров, работайте совместно над задачами!</p>
                    <ul className='form__info-items'>
                        <li className='form__info-item'>Бесплатно</li>
                        <li className='form__info-item'>Без привязки карты</li>
                        <li className='form__info-item'>2000+ пользователей</li>
                    </ul>
                    <form className='main__form'>
                        <input placeholder='Электронная почта' className='form__input form__input_theme_blue'></input>
                        <button className='form__button form__button_theme_blue'>Начать →</button>
                    </form>
                </div>
                <div className='dialogue-container'>
                    <ul className='dialogue-container__avatars'>
                        <li><img className='dialogue-container__avatar' src={avatar}></img></li>
                        <li><img className='dialogue-container__avatar' src={avatar}></img></li>
                        <li><img className='dialogue-container__avatar' src={avatar}></img></li>
                        <li><img className='dialogue-container__avatar' src={avatar}></img></li>
                    </ul>
                    <img className='dialogue-container__pen' alt='pen' src={pen}></img>

                </div>
            </section>
        </>
    );
}

export default Main;
