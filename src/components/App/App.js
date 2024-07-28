import './App.scss'
import Feedback from '../Feedback/Feedback';
import Main from '../Main/Main';
import Cases from '../Cases/Cases';
import '../Form/Form.scss';

function App() {
    return (
        <div className="App">
            <Main />
            <Cases />
            <Feedback />
        </div>
    );
}

export default App;