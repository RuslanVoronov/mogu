import './ImagePage.scss';
import manWithM from '../../images/man-m.svg'
import manWithO from '../../images/man-o.svg'
import manWithG from '../../images/man-g.svg'
import manWithU from '../../images/man-u.svg'


function ImagePage() {
    return (
        <section className='image-page' id='image-page'>
            <ul className='image-page__list'>
                <li className='image-page__list-item'><img className='image-page__man' src={manWithM}></img></li>
                <li className='image-page__list-item'><img className='image-page__man' src={manWithO}></img></li>
                <li className='image-page__list-item'><img className='image-page__man' src={manWithG}></img></li>
                <li className='image-page__list-item'><img className='image-page__man' src={manWithU}></img></li>
            </ul>
        </section>
    )
}

export default ImagePage;