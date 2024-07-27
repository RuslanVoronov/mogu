import './Main.scss';
import Header from '../Header/Header';

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
                        <input placeholder='Электронная почта' className='form__input'>

                        </input>
                        <button className='form__button'>Начать</button>
                    </form>
                </div>
                <div className='main__dialogue'>

                </div>
            </section>
        </>
    );
}

export default Main;
