import './AboutUs.scss'
import snake from '../../images/snake.png';
import hands from '../../images/hands.svg';
import computer from '../../images/computer.png';
import arms from '../../images/hands.png';
import note from '../../images/note.png';

function AboutUs() {
    return (
        <section className='about-us' id='about-us'>
            <div className='about-us__card about-us__card_color_pink'>
                <img className='about-us__image_computer' alt='компьютер' src={computer}></img>
                <h2 className='about-us__title'>Вся информация как на ладони</h2>
                <p className='about-us__text'>единая строка поиска для всех проектов - где бы ни была задача, вы быстро ее найдете</p>
            </div>
            <div className='about-us__card about-us__card_color_black'>
                <h2 className='about-us__title'>Ничто не мешает полету мысли</h2>
                <p className='about-us__text'>фиксируйте новые идеи в один клик, прикрепляйте файлы и подробные описания сути задач</p>
                <img className='about-us__image_arms' alt='руки' src={arms}></img>
            </div>
            <div className='about-us__card about-us__card_color_purple'>
                <h2 className='about-us__title'>Порядок в подарок</h2>
                <p className='about-us__text'> задачи удобно структурировать с помощью чек-листов, меток и пользовательских полей</p>
                <img className='about-us__image_note' alt='тетрадь' src={note}></img>
                <ul className='about-us__list-items'>
                    <li className='about-us__text about-us__list-item'>обновляйте статус задачи</li>
                    <li className='about-us__text about-us__list-item about-us__list-item_arrow'>→</li>
                    <li className='about-us__text about-us__list-item'>следите за сроками дедлайнов</li>
                    <li className='about-us__text about-us__list-item about-us__list-item_arrow'>→</li>
                    <li className='about-us__text about-us__list-item'>отправляйте завершенные задачи в архив</li>
                </ul>
            </div>
            <div className='about-us__card about-us__card_color_yellow'>
                <h2 className='about-us__title'>Совместная
                    работа на одной доске</h2>
                <p className='about-us__text'>приглашайте коллег, бизнес-партнеров и заказчиков</p>
            </div>
            <div className='about-us__image-background_hands'>
                <img className='about-us__image_hands' src={hands}></img>
            </div>
            <div className='about-us__card about-us__card_color_green'>
                <h2 className='about-us__title'>Настройка под вас</h2>
                <p className='about-us__text'>устанавливайте персональный фон для каждого проекта</p>
            </div>
            <img className='about-us__image_snake' src={snake}></img>
        </section>
    )
}

export default AboutUs;