import './App.scss';
import Hi from './Components/01_NAMU_DARBAI/04-05/Hi';
import Animals from './Components/01_NAMU_DARBAI/04-05/Animals';
import TextoDydis from './Components/01_NAMU_DARBAI/04-05/SriftoDydis';
import ThreeProps from './Components/01_NAMU_DARBAI/04-05/TrysProps';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h3>Pirma užduotis</h3>
                <Hi />
                <h3>Antra užduotis</h3>
                <Hi sekasi="Kaip sekasi?" />
                <h3>Trečia užduotis</h3>
                <Animals col='1' />
                <Animals col='2' />
                <h3>Kevirta užduotis</h3>
                <TextoDydis
                    h1="Bet koks tekstas"
                    h2="Bet koks tekstas"
                />
                <h3>Penkta užduotis</h3>
                <ThreeProps text="belenkas" text2="belenkur" spalva="green" />

            </header>
        </div>
    );
}

export default App;