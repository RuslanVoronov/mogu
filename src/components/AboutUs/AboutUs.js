import './AboutUs.scss'
import snake from '../../images/snake.png';
import hands from '../../images/hands.png'

function AboutUs() {
    return (
        <section className='about-us' id='about-us'>
            <div className='about-us__card about-us__card_color_pink'>
                <h2 className='about-us__title'>Вся информация как на ладони</h2>
                <p className='about-us__text'>единая строка поиска для всех проектов - где бы ни была задача, вы быстро ее найдете</p>
            </div>
            <div className='about-us__card about-us__card_color_black'>
                <h2 className='about-us__title'>Ничто не мешает полету мысли</h2>
                <p className='about-us__text'>фиксируйте новые идеи в один клик, прикрепляйте файлы и подробные описания сути задач</p>
            </div>
            <div className='about-us__card about-us__card_color_purple'>
                <h2 className='about-us__title'>Порядок в подарок</h2>
                <p className='about-us__text'> задачи удобно структурировать с помощью чек-листов, меток и пользовательских полей</p>
            </div>
            <div className='about-us__card about-us__card_color_yellow'>
                <h2 className='about-us__title'>Совместная
                    работа на одной доске</h2>
                <p className='about-us__text'>приглашайте коллег, бизнес-партнеров и заказчиков</p>
            </div>
            <img className='about-us__image_hands' src={hands}></img>
            <div className='about-us__card about-us__card_color_green'>
                <h2 className='about-us__title'>Настройка под вас</h2>
                <p className='about-us__text'>устанавливайте персональный фон для каждого проекта</p>
            </div>
            <img className='about-us__image_snake' src={snake}></img>
        </section>
    )
}

export default AboutUs;