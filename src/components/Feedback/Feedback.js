import './Feedback.scss';
import cat__body from '../../images/cat__body.svg';
import cat__body_small from '../../images/small-cat-with-eye.png';
import cat__eye from '../../images/cat_eye.svg';

function Feedback() {
    return (
        <section className="feedback" id='feedback'>
            <form className='feedback__form'>
                <h2 className='form__title'>Обратная связь</h2>
                <input placeholder='Электронная почта' className='form__input form__input_theme_black'></input>
                <textarea placeholder='О чём хотите рассказать?' className='form__input form__input_type_textarea form__input_theme_black'></textarea>
                <button className='form__button form__button_theme_black'>отправить →</button>
            </form>
            <div className='feedback__cat'>
                <picture>
                    <source className='cat__body' srcset={cat__body} media="(min-width: 768px)" />
                    {/* <source className='cat__body' srcset={cat__body} media="(max-width: 768px)" /> */}
                    <img src={cat__body_small} alt='кот'></img>
                </picture>

                <img src={cat__eye} alt='кот' className='cat__eye cat__eye_type_left'></img>
                <img src={cat__eye} alt='кот' className='cat__eye cat__eye_type_right'></img>
            </div>
        </section>
    );
}

export default Feedback;