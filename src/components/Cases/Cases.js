import './Cases.scss';
import image from '../../images/img.png';
import image1 from '../../images/hands.png';

import { useState } from 'react';

function Cases() {

    const [currentImgId, setCurrentImgId] = useState(0)

    function handleLink(link) {
        const links = document.querySelectorAll('.cases__list-item')
        links.forEach(link => {
            link.classList.remove('cases__list-item_active')
        });
        link.target.classList.add('cases__list-item_active')

        const img = document.querySelector('.cases__image')
        img.classList.add('cases__image_unvisible')
        img.classList.remove('cases__image_visible')

        if (link.target.id === "product") {
            setCurrentImgId(0)
        }
        if (link.target.id === "growth") {
            // img.classList.add('cases__image_visible')
            // img.classList.remove('cases__image_unvisible')
            setCurrentImgId(1)
        }
        if (link.target.id === "creatime") {
            setCurrentImgId(2)
        }
        if (link.target.id === "marcketing") {

            setCurrentImgId(3)
        }
        if (link.target.id === "pr") {
            setCurrentImgId(4)

        }
    }

    return (
        <section className="cases" id='cases'>
            <div className='cases__container'>
                <div>
                    <ul className='cases__list-items'>
                        <li className='cases__list-item cases__list-item_active' id='product' onClick={handleLink}>Product marketing</li>
                        <li className='cases__list-item' id='growth' onClick={handleLink}>Growth marketing</li>
                        <li className='cases__list-item' id='creatime' onClick={handleLink}>Creatime</li>
                        <li className='cases__list-item' id='marcketing' onClick={handleLink}>Marketing</li>
                        <li className='cases__list-item' id='pr' onClick={handleLink}>PR</li>
                    </ul>
                    <h2 className='cases__title'>Создание лендинга</h2>
                    <p className='cases__text'>Заведите доску, пригласите дизайнера, верстальщика и маркетолога, проведите брейншторм и зафиксируйте все идеи на доске, в колонке «Бэклог», приоритизируйте идеи - с помощью меток или отдельных колонок, наиболее приоритетным - назначьте дедлайны и передайте в работу исполнителям</p>
                </div>

                <img className={`cases__image ${currentImgId === 0 ? 'cases__image_visible' : 'cases__image_unvisible'}`} alt='картинка' src={image} />
                <img className={`cases__image ${currentImgId === 1 ? 'cases__image_visible' : 'cases__image_unvisible'}`} alt='картинка' src={image} />
                <img className={`cases__image ${currentImgId === 2 ? 'cases__image_visible' : 'cases__image_unvisible'}`} alt='картинка' src={image} />
                <img className={`cases__image ${currentImgId === 3 ? 'cases__image_visible' : 'cases__image_unvisible'}`} alt='картинка' src={image} />
                <img className={`cases__image ${currentImgId === 4 ? 'cases__image_visible' : 'cases__image_unvisible'}`} alt='картинка' src={image} />
                <img className={`cases__image ${currentImgId === 5 ? 'cases__image_visible' : 'cases__image_unvisible'}`} alt='картинка' src={image} />


            </div>
        </section>
    );
}

export default Cases;
