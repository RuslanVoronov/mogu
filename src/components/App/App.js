import { useEffect } from 'react';
import './App.scss'
import Feedback from '../Feedback/Feedback';
import Main from '../Main/Main';
import Cases from '../Cases/Cases';
import '../Form/Form.scss';
import ImagePage from '../ImagePage/ImagePage';
import AboutUs from '../AboutUs/AboutUs';

function App() {

    useEffect(() => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }, []);

    return (
        <div className="App">
            <Main />
            <ImagePage />
            <AboutUs />
            <Cases />
            <Feedback />
        </div>
    );
}

export default App;