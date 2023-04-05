import './App.scss';
import Hi from './Components/01_NAMU_DARBAI/04-05/Hi';
import Animals from './Components/01_NAMU_DARBAI/04-05/Animals';
import TextoDydis from './Components/01_NAMU_DARBAI/04-05/SriftoDydis';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h3>Pirma užduotis</h3>
                <Hi />
                <h3>Antra užduotis</h3>
                <Hi sekasi="Kaip sekasi?" />
                <h3>Trečia užduotis</h3>
                <Animals color1="Zebrai ir Bebrai" />
                <Animals color2="Zebrai ir Bebrai" />
                <h3>Kevirta užduotis</h3>
                <TextoDydis
                    H1Textas="Bet koks tekstas"
                    H2Textas="Bet koks tekstas"
                />
                <h3>Penkta užduotis</h3>
                <TextoDydis
                    H1Textas="belenkas" H2Textas="belenkur" spalvele="belenkada"
                />

            </header>
        </div>
    );
}

export default App;