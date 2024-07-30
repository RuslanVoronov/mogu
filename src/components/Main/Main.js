import './Main.scss';
import Header from '../Header/Header';
import pen from '../../images/pen.svg';
import avatar from '../../images/avatar1.svg';
import dog from '../../images/avatar_dog.png';
import woman from '../../images/avatar_women.png';
import man from '../../images/avatar_man.png';
import plus from '../../images/plus.svg';
import cursor from '../../images/cursor.svg';
import { useState } from 'react';

function Main() {
    const [clicked, setClicked] = useState()
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
                    <div className='dialogue__message-block dialogue__message-block_place_corner'><p className='dialogue__message-text'>Совместная работа</p></div>
                    <ul className='dialogue-container__avatars'>
                        <div className='dialogue__message-block dialogue__message-block_place_over-avatars'>
                            <p className='dialogue__message-text dialogue__message-text_color_orange'>Это ваш милейший коллега </p>
                            <span className='dialogue__block-rectangle'></span>
                        </div>
                        <li>
                            <div><img className='dialogue-container__avatar' src={avatar}></img>
                                <img className='dialogue-container__cursor' src={cursor} />
                                <div className='dialogue__message-block dialogue__message-block_place_under-avatars'>
                                    <p className='dialogue__message-text'>А это вы</p>
                                </div>
                            </div>
                        </li>
                        <li><img className='dialogue-container__avatar' src={woman}></img></li>
                        <li><img className='dialogue-container__avatar' src={dog}></img></li>
                        <li><img className='dialogue-container__avatar' src={man}></img></li>
                        <li><img className='dialogue-container__avatar dialogue-container__avatar_add' src={plus}></img></li>
                    </ul>
                    <img className='dialogue-container__pen' alt='pen' src={pen}></img>

                </div>
                <a className='main__link-arrow' href='#image-page'
                    onClick={() => setClicked(1)}
                    onAnimationEnd={() => setClicked(0)}
                    clicked={clicked}></a>
            </section>
        </>
    );
}

export default Main;
