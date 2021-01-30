import InProgress from './components/inProgress'
import {useTranslation} from 'react-i18next';

function App() {
    const {t, i18n} = useTranslation();

    return (
        <div className="App">
            <div>{t('box1.text1')}</div>
            <button onClick={() => i18n.changeLanguage('en')}>en</button>
            <button onClick={() => i18n.changeLanguage('es')}>es</button>
            <InProgress/>
        </div>
    );
}

export default App;
