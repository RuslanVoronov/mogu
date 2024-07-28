import './Feedback.scss';
import cat from '../../images/cat.svg'

function Feedback() {
    return (
        <section className="feedback">
            <form className='feedback__form'>
                <h2 className='form__title'>Обратная связь</h2>
                <input className='form__input form__input_theme_black'></input>
                <input className='form__input form__input_type_textarea form__input_theme_black'></input>
                <button className='form__button form__button_theme_black'>отправить</button>
            </form>
            <img src={cat} alt='кот' className='feedback__cat'></img>
        </section>
    );
}

export default Feedback;
