import './Feedback.scss';
import cat__body from '../../images/cat__body.svg'
import cat__eye from '../../images/cat_eye.svg'

function Feedback() {
    return (
        <section className="feedback" id='feedback'>
            <form className='feedback__form'>
                <h2 className='form__title'>Обратная связь</h2>
                <input className='form__input form__input_theme_black'></input>
                <input className='form__input form__input_type_textarea form__input_theme_black'></input>
                <button className='form__button form__button_theme_black'>отправить →</button>
            </form>
            <div className='feedback__cat'>
                <img src={cat__body} alt='кот' className='cat__body'></img>
                <img src={cat__eye} alt='кот' className='cat__eye cat__eye_type_left'></img>
                <img src={cat__eye} alt='кот' className='cat__eye cat__eye_type_right'></img>
            </div>
        </section>
    );
}

export default Feedback;
