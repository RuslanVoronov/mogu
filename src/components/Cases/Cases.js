import './Cases.scss';
import image from '../../images/img.png';

function Cases() {
    return (
        <section className="cases">
            <div className='cases__container'>
                <div>
                    <ul className='cases__list-items'>
                        <li className='cases__list-item'>Product marketing</li>
                        <li className='cases__list-item'>Growth marketing</li>
                        <li className='cases__list-item'>Creatime</li>
                        <li className='cases__list-item'>Marketing</li>
                        <li className='cases__list-item'>PR</li>
                    </ul>
                    <h2 className='cases__title'>Создание лендинга</h2>
                    <p className='cases__text'>Заведите доску, пригласите дизайнера, верстальщика и маркетолога, проведите брейншторм и зафиксируйте все идеи на доске, в колонке «Бэклог», приоритизируйте идеи - с помощью меток или отдельных колонок, наиболее приоритетным - назначьте дедлайны и передайте в работу исполнителям</p>
                </div>
                <img className='cases__image' alt='картинка' src={image} />
            </div>
        </section>
    );
}

export default Cases;
