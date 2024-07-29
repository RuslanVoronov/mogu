import './App.scss'
import Feedback from '../Feedback/Feedback';
import Main from '../Main/Main';
import Cases from '../Cases/Cases';
import '../Form/Form.scss';
import ImagePage from '../ImagePage/ImagePage';

function App() {
    return (
        <div className="App">
            <Main />
            <ImagePage />
            <Cases />
            <Feedback />
        </div>
    );
}

export default App;